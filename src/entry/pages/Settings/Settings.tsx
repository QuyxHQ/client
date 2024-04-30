import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../context/AppProvider";
import { apiSdk } from "../../../utils/api.utils";
import { isURL } from "../../../utils/helper";

const Settings = () => {
  const { user, update } = useAppContext();

  const [pfp, setPfp] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [twitterLink, setTwitterLink] = useState<string>("");
  const [youtubeLink, setYoutubeLink] = useState<string>("");
  const [instagramLink, setInstagramLink] = useState<string>("");
  const [otherLink, setOtherLink] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      if (!user) return;

      setPfp(user.pfp || "");
      setUsername(user.username);
      setBio(user.bio || "");
      setTwitterLink(user.twitterLink || "");
      setYoutubeLink(user.youtubeLink || "");
      setInstagramLink(user.instagramLink || "");
      setOtherLink(user.otherLink || "");
    })();
  }, [user]);

  const fileRef = useRef<any>();

  function handleImageChange(e: any) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: any) => setPfp(e.target.result);
    reader.readAsDataURL(file);
  }

  async function editProfile(e: any) {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    let currentPfp = pfp;
    if (currentPfp && !isURL(currentPfp)) {
      // upload it...
      const resp = await apiSdk.uploadImage(currentPfp.split(",")[1]);
      if (!resp) return;
      currentPfp = resp;
    }

    const user = await apiSdk.edit({
      pfp: currentPfp.length == 0 ? null : currentPfp,
      bio,
      instagramLink,
      otherLink,
      twitterLink,
      username,
      youtubeLink,
    });

    if (user) update(user as QuyxUser);
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

              <form
                className="col-12 col-sm-11 col-lg-9 col-xl-8"
                action="#"
                method="post"
                onSubmit={editProfile}
              >
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
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          placeholder="Enter username"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="bio">Short bio</label>
                        <textarea
                          name="bio"
                          id="bio"
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          placeholder="A short detail about yourself :-)"
                          rows={4}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="twitterLink">Twitter Link</label>
                        <div className="copy position-relative">
                          <input
                            type="text"
                            id="twitterLink"
                            name="twitterLink"
                            placeholder="https://twitter.com/"
                            value={twitterLink}
                            onChange={(e) => setTwitterLink(e.target.value)}
                          />

                          <div className="copy-box position-absolute">
                            <i className="h h-twitter" />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="youtubeLink">Youtube Link</label>
                        <div className="copy position-relative">
                          <input
                            type="text"
                            id="youtubeLink"
                            name="youtubeLink"
                            placeholder="https://youtube.com/"
                            value={youtubeLink}
                            onChange={(e) => setYoutubeLink(e.target.value)}
                          />

                          <div className="copy-box position-absolute">
                            <i className="h h-youtube" />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="instagramLink">Instagram Link</label>
                        <div className="copy position-relative">
                          <input
                            type="text"
                            id="instagramLink"
                            name="instagramLink"
                            placeholder="https://instagram.com/"
                            value={instagramLink}
                            onChange={(e) => setInstagramLink(e.target.value)}
                          />

                          <div className="copy-box position-absolute">
                            <i className="h h-instagram" />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="otherLink">Other Link</label>
                        <div className="copy position-relative">
                          <input
                            type="text"
                            id="otherLink"
                            name="otherLink"
                            placeholder="Any link"
                            value={otherLink}
                            onChange={(e) => setOtherLink(e.target.value)}
                          />

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
                        <button className="gradient-border" disabled={isLoading} type="submit">
                          {isLoading ? (
                            <div className="px-3">
                              <span className="loader-span-sm" />
                            </div>
                          ) : (
                            <div className="px-2">Save</div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
