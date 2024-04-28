import { useEffect, useState } from "react";
import { useModal } from "../../context/ModalProvider";
import { useNavigate } from "react-router-dom";
import { UploadMedia } from "../..";

const NewCard = () => {
  const { displayModal, openModal, closeModal, setModalBody } = useModal();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [pfp, setPfp] = useState<string>("");
  const [loadingText, setLoadingText] = useState<string>("Processing");

  const navigate = useNavigate();

  useEffect(() => {
    (function () {
      if (1 > 1 + 1) {
        setModalBody(
          <div className="kyc-modal py-4 px-3">
            <h2>No Username</h2>

            <div className="alert">
              <div>
                <i className="h h-alert-triangle" />
              </div>
              <p>
                Heads up! Let's get you all setup, get your <strong>KYC</strong> done before you can
                start creating cards
              </p>
            </div>

            <div className="buttons">
              <button
                className="gradient-border w-100"
                onClick={() => {
                  navigate("/settings");
                  closeModal();
                }}
              >
                Proceed to KYC
              </button>

              <button
                className="w-100"
                onClick={() => {
                  navigate(-1);
                  setTimeout(() => closeModal(), 10);
                }}
              >
                Go back
              </button>
            </div>
          </div>
        );

        openModal();
      }
    })();
  }, [displayModal]);

  return (
    <div className="container-fluid container-xl mb-5">
      <div className="row">
        <div className="col-12">
          <div className="px-2 new-edit-card">
            <div className="page">
              <h1 className="page-title">Create Profile Card</h1>
            </div>

            <div className="co-12">
              <div className="row g-3">
                <div className="col-12">
                  <div className="row g-4 g-xl-5">
                    <UploadMedia setPfp={setPfp} pfp={pfp} />

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="username for card"
                          autoComplete="off"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea
                          name="bio"
                          id="bio"
                          rows={5}
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          placeholder="short bio about this card"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-0 mt-md-3">
              <button className="btn" onClick={() => {}} disabled>
                {isLoading ? (
                  <div className="d-flex align-items-center">
                    <span className="loader-span-sm"></span>
                    <p>{loadingText}</p>
                  </div>
                ) : (
                  <div className="px-2">Mint</div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
