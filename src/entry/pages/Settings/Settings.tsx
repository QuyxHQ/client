import { useEffect, useRef, useState } from 'react';
import { LoginButton } from '@telegram-auth/react';
import { getAvatar, isURL, toQs } from '../../../utils/helper';
import useApp from '../../hooks/useApp';
import useApi from '../../hooks/useApi';
import env from '../../../utils/env';

const Settings = () => {
    const [pfp, setPfp] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [xLink, setXLink] = useState<string>('');
    const [ytLink, setYtLink] = useState<string>('');
    const [tgLink, setTgLink] = useState<string>('');
    const [otherLink, setOtherLink] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { user: whoami, login } = useApp();

    useEffect(() => {
        if (!whoami) return;

        setUsername(whoami.username);
        setBio(whoami.bio || '');
        setPfp(whoami.pfp || '');
        setXLink(whoami.socials?.x || '');
        setYtLink(whoami.socials?.yt || '');
        setTgLink(whoami.socials?.tg || '');
        setOtherLink(whoami.socials?.other || '');
    }, [whoami]);

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

        if (isLoading || !whoami) return;
        setIsLoading(true);

        const { misc, user } = await useApi();

        let currentPfp = pfp;
        if (currentPfp && !isURL(currentPfp)) {
            // upload it...
            const resp = await misc.uploadImage(currentPfp);
            if (!resp) return setIsLoading(false);
            currentPfp = resp;
        }

        const resp = await user.updateInformation(username, bio, currentPfp, {
            x: xLink.length > 0 ? xLink : undefined,
            yt: ytLink.length > 0 ? ytLink : undefined,
            tg: tgLink.length > 0 ? tgLink : undefined,
            other: otherLink.length > 0 ? otherLink : undefined,
        });

        if (resp) {
            login({
                ...whoami,
                username,
                bio,
                pfp: currentPfp,
                socials: { x: xLink, yt: ytLink, tg: tgLink, other: otherLink },
            });
        }

        setIsLoading(false);
    }

    return (
        <section className="mb-5">
            <div className="bg"></div>
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
                                                src={
                                                    pfp && pfp.length > 0
                                                        ? pfp
                                                        : getAvatar(null, whoami?.username || '')
                                                }
                                                alt={username}
                                            />

                                            <div
                                                className="position-absolute"
                                                onClick={() => fileRef.current.click()}
                                            >
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
                                                <label htmlFor="xLink">
                                                    X (Formerly Twiiter) Link
                                                </label>
                                                <div className="copy position-relative">
                                                    <input
                                                        type="url"
                                                        id="xLink"
                                                        name="xLink"
                                                        placeholder="https://twitter.com/######"
                                                        value={xLink}
                                                        onChange={(e) => setXLink(e.target.value)}
                                                    />

                                                    <div className="copy-box position-absolute">
                                                        <i className="h h-twitter" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="ytLink">Youtube Link</label>
                                                <div className="copy position-relative">
                                                    <input
                                                        type="url"
                                                        id="ytLink"
                                                        name="ytLink"
                                                        placeholder="https://youtube.com/######"
                                                        value={ytLink}
                                                        onChange={(e) => setYtLink(e.target.value)}
                                                    />

                                                    <div className="copy-box position-absolute">
                                                        <i className="h h-youtube" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="tgLink">Telegram Link</label>
                                                <div className="copy position-relative">
                                                    <input
                                                        type="url"
                                                        id="tgLink"
                                                        name="tgLink"
                                                        placeholder="https://t.me/######"
                                                        value={tgLink}
                                                        onChange={(e) => setTgLink(e.target.value)}
                                                    />

                                                    <div className="copy-box position-absolute">
                                                        <i className="h h-send" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="otherLink">Other Link</label>
                                                <div className="copy position-relative">
                                                    <input
                                                        type="url"
                                                        id="otherLink"
                                                        name="otherLink"
                                                        placeholder="https://portfolio.me.com"
                                                        value={otherLink}
                                                        onChange={(e) =>
                                                            setOtherLink(e.target.value)
                                                        }
                                                    />

                                                    <div className="copy-box position-absolute">
                                                        <i className="h h-external-link" />
                                                    </div>
                                                </div>
                                            </div>

                                            {!env.IS_TESTNET ? (
                                                <>
                                                    <div className="alert info">
                                                        <div>
                                                            <i className="h h-send" />
                                                        </div>
                                                        <div>
                                                            <h4 className="mb-1">
                                                                Connect Telegram Account
                                                            </h4>
                                                            <p>
                                                                Helps you manage your digital
                                                                identities and notifications in one
                                                                place
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <LoginButton
                                                        botUsername="QuyxBot"
                                                        onAuthCallback={async (data) => {
                                                            console.log(data);

                                                            const { auth } = await useApi();
                                                            const qs = toQs(data);

                                                            console.log(qs);

                                                            const resp =
                                                                await auth.completeOnboarding(qs);

                                                            alert(JSON.stringify(resp));

                                                            if (resp) window.location.reload();
                                                        }}
                                                    />

                                                    <div className="py-3"></div>
                                                </>
                                            ) : null}

                                            <div className="form-group">
                                                <button
                                                    className="gradient-border"
                                                    disabled={isLoading}
                                                    type="submit"
                                                >
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
