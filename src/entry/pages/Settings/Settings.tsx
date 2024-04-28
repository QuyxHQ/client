import { useRef, useState } from "react";
import { copyToClipboard } from "../../../utils/helper";
import useTonConnect from "../../hooks/useTonConnect";

const Settings = () => {
  const { address } = useTonConnect();

  const [pfp, setPfp] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fileRef = useRef<any>();

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

    setTimeout(() => setIsLoading(false), 3000);
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
                        src={pfp && pfp.length > 0 ? pfp : "/images/default-user.png"}
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
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="bio">Short bio</label>
                        <textarea
                          name="bio"
                          id="bio"
                          required
                          placeholder="A short detail about yourself :-)"
                          rows={4}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">Twitter Link</label>
                        <div className="copy position-relative">
                          <input type="text" name="address" placeholder="https://twitter.com/" />

                          <div className="copy-box position-absolute">
                            <i className="h h-twitter" />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">Youtube Link</label>
                        <div className="copy position-relative">
                          <input type="text" name="address" placeholder="https://youtube.com/" />

                          <div className="copy-box position-absolute">
                            <i className="h h-youtube" />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">Instagram Link</label>
                        <div className="copy position-relative">
                          <input type="text" name="address" placeholder="https://instagram.com/" />

                          <div className="copy-box position-absolute">
                            <i className="h h-instagram" />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">Other Link</label>
                        <div className="copy position-relative">
                          <input type="text" name="address" placeholder="Any link" />

                          <div className="copy-box position-absolute">
                            <i className="h h-external-link" />
                          </div>
                        </div>
                      </div>

                      <div className="alert info">
                        <div>
                          <i className="h h-send" />
                        </div>
                        <div>
                          <h4 className="mb-1">Connect Telegram Account (Coming soon)</h4>
                          <p>
                            Allows you to receive notifications you subscribe to directly to your
                            Telegram DM
                          </p>
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
