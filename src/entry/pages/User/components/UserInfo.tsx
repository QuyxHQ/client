import { Address } from 'ton-core';
import { AnchorLink, VerifiedIcon } from '../../..';
import { copyToClipboard, truncateAddress } from '../../../../utils/helper';
import useApp from '../../../hooks/useApp';

const UserInfo = ({ user }: { user: User }) => {
    const { user: whoami } = useApp();

    return (
        <div className="user-info py-lg-4 my-4 my-lg-0">
            <div className="container">
                <div>
                    <div className="position-relative mb-3">
                        <img
                            src={user.pfp ? user.pfp : '/images/default-user.png'}
                            alt={user.username}
                        />

                        {whoami && whoami._id == user._id ? (
                            <AnchorLink to="/edit-profile" className="position-absolute">
                                <i className="h h-edit-2" />
                            </AnchorLink>
                        ) : null}
                    </div>

                    <h1 className="mb-3">
                        <span>{user.username}</span>
                        {user.hasBlueTick ? <VerifiedIcon width={28} height={28} /> : null}
                    </h1>

                    <p className="bio mb-4"> {user.bio ? <>&raquo; {user.bio}</> : null}</p>

                    <p
                        className="addr"
                        onClick={() => copyToClipboard(Address.parse(user.address).toString())}
                    >
                        <span>
                            {truncateAddress({ address: Address.parse(user.address).toString() })}
                        </span>

                        <span>
                            <i className="h h-copy" />
                        </span>
                    </p>

                    <div className="socials">
                        {user.socials?.x ? (
                            <AnchorLink to={user.socials.x} target="_blank">
                                <i className="h h-twitter" />
                            </AnchorLink>
                        ) : null}

                        {user.socials?.yt ? (
                            <AnchorLink to={user.socials.yt} target="_blank">
                                <i className="h h-youtube" />
                            </AnchorLink>
                        ) : null}

                        {user.socials?.tg ? (
                            <AnchorLink to={user.socials.tg} target="_blank">
                                <i className="h h-send" />
                            </AnchorLink>
                        ) : null}

                        {user.socials?.other ? (
                            <AnchorLink to={user.socials.other} target="_blank">
                                <i className="h h-external-link" />
                            </AnchorLink>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
