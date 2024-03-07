import { useEffect, useRef, useState } from "react";
import { useAppStore } from "../../context/AppProvider";
import { api } from "../../../utils/class/api.class";
import { copyToClipboard, isURL } from "../../../utils/helper";

const Settings = () => {
  const { userInfo, address } = useAppStore();

  const [pfp, setPfp] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);

  const fileRef = useRef<any>();

  useEffect(() => {
    if (userInfo) {
      setPfp(userInfo.pfp ?? "");
      setUsername(userInfo.username);
      setEmail(userInfo.email ?? "");
    }
  }, [userInfo]);

  function handleImageChange(e: any) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: any) => setPfp(e.target.result);
    reader.readAsDataURL(file);
  }

  async function editInfo() {
    if (isLoading) return;
    setIsLoading(true);

    let currentPfp = pfp;
    if (currentPfp && !isURL(currentPfp)) {
      // upload it...
      const resp = await api.uploadImage({ base64Image: currentPfp.split(",")[1] });
      if (!resp) return;

      currentPfp = resp;
    }

    const resp = await api.edit({
      pfp: currentPfp.length == 0 ? null : currentPfp,
      email,
      username,
    });

    if (resp) window.location.reload();
    setIsLoading(false);
  }

  async function sendOTP() {
    if (isLoading) return;
    setIsLoading(true);
    const resp = await api.kycInit();
    if (resp) setIsOtpSent(true);

    setIsLoading(false);
  }

  async function verifyOTP() {
    if (isLoading) return;
    setIsLoading(true);
    const resp = await api.kycVerify({ otp });
    if (resp) setTimeout(() => window.location.reload(), 1500);

    setIsLoading(false);
  }

  return (
    <section className="mb-5">
      <div className="container-fluid container-xl">
        <div className="row">
          <div className="col-12">
            <div className="px-2">
              <div className="page">
                <h1 className="page-title">Settings</h1>
              </div>

              <div className="col-12 col-sm-11 col-lg-9 col-xl-8">
                <div className="row flex-row-reverse g-4">
                  <div className="col-12 col-md-4">
                    <div className="position-relative settings-image">
                      <img
                        src={
                          pfp && pfp.length > 0
                            ? pfp
                            : userInfo && userInfo.pfp
                            ? userInfo.pfp
                            : "/images/default-user.png"
                        }
                        alt={username}
                      />

                      <div className="position-absolute" onClick={() => fileRef.current.click()}>
                        <i className="h h-camera" />
                      </div>

                      <input
                        className="d-none"
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleImageChange}
                        ref={fileRef}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-8">
                    <div>
                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          required
                          placeholder="Enter username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>

                      {!userInfo?.email ? (
                        <div className="alert">
                          <div>
                            <i className="h h-alert-triangle" />
                          </div>
                          <p>
                            Heads up! email address not yet added, add email address to begin KYC
                            process
                          </p>
                        </div>
                      ) : null}

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      {userInfo?.email && !userInfo.hasCompletedKYC ? (
                        <div className="alert warning">
                          <div className="write">
                            <h3>KYC required</h3>
                            <p>
                              Hello there, we need you to verify your email address before granting
                              you full access to priviledges on quyx
                            </p>

                            {isOtpSent ? (
                              <>
                                <div className="form-group">
                                  <label htmlFor="otp">OTP</label>
                                  <input
                                    type="number"
                                    name="otp"
                                    id="otp"
                                    required
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                  />
                                </div>

                                <button disabled={isLoading} onClick={verifyOTP}>
                                  Verify OTP
                                </button>
                              </>
                            ) : (
                              <button disabled={isLoading} onClick={sendOTP}>
                                Request OTP
                              </button>
                            )}
                          </div>
                        </div>
                      ) : null}

                      <div className="form-group">
                        <label htmlFor="address">Wallet address</label>
                        <div className="copy position-relative">
                          <input type="text" name="address" id="address" value={address} readOnly />

                          <div
                            className="copy-box position-absolute"
                            onClick={() => copyToClipboard(address ?? "")}
                          >
                            <i className="h h-copy" />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <button className="gradient-border" disabled={isLoading} onClick={editInfo}>
                          {isLoading ? "Processing..." : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
