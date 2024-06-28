import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { AnchorLink, ConnectBtn, GradientLogo, Logo, MenuIcon, VerifiedIcon } from '..';
import { Address, fromNano } from 'ton-core';
import { getAvatar, truncateAddress } from '../../../utils/helper';
import useTonClient from '../../hooks/useTonClient';
import useApp from '../../hooks/useApp';
import useTonConnect from '../../hooks/useTonConnect';
import useApi from '../../hooks/useApi';
import { useTonConnectUI } from '@tonconnect/ui-react';
import env from '../../../utils/env';

const DefaultNavbar = () => {
    const [displayNavbar, setDisplayNavbar] = useState<boolean>(false);
    const [isLogoutLoading, setIsLogoutLoading] = useState<boolean>(false);
    const [balance, setBalance] = useState<string>();

    const divRef = useRef<any>(null);
    const [dropVisible, setDropVisible] = useState<boolean>(false);

    const { logout, user, events } = useApp();
    const { connected } = useTonConnect();
    const { client } = useTonClient();
    const [tonConnectUI] = useTonConnectUI();

    const handleClickOutside = (e: any) => {
        if (divRef.current && !divRef.current.contains(e.target)) {
            setDropVisible(false);
        }
    };

    const handleEscKeyPress = (e: any) => {
        if (e.key === 'Escape') {
            setDropVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKeyPress);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKeyPress);
        };
    }, []);

    useEffect(() => {
        if (dropVisible) document.body.classList.add('scroll-disabled');
        else document.body.classList.remove('scroll-disabled');
    }, [dropVisible]);

    useEffect(() => {
        (async function () {
            if (!client || !user) return;

            const balance = await client.getBalance(Address.parse(user.address));
            setBalance(Number(fromNano(balance)).toFixed(2));
        })();
    }, [client, user]);

    const navigate = useNavigate();
    const location = useLocation();

    async function doLogout() {
        setIsLogoutLoading(true);

        const { session } = await useApi();
        const resp = await session.deleteCurrentSession();
        if (resp) {
            await Promise.all([tonConnectUI.disconnect(), logout()]);
            setDropVisible(false);
        }

        setIsLogoutLoading(false);
    }

    const navigation = [
        {
            title: 'Claim username',
            icon: 'user',
            to: '/claim',
        },
        {
            title: 'Edit profile',
            icon: 'edit-2',
            to: '/edit-profile',
        },
        {
            title: 'Bookmarks',
            icon: 'heart',
            to: '/bookmarks',
        },
        {
            isDivider: true,
        },
        {
            title: 'Docs',
            icon: 'file',
            to: '//docs.quyx.xyz',
            target: '_blank',
        },
        {
            title: 'Help center',
            icon: 'help-circle',
            to: 'mailto:momoreoluwaadedeji@gmail.com',
            target: '_blank',
        },
        {
            isDivider: true,
        },
    ];

    const main_navigation = [
        {
            title: 'Home',
            to: '/',
        },
        {
            title: 'Team',
            to: '/team',
        },
        {
            title: 'Explore',
            to: '/explore',
        },
        {
            title: 'Docs',
            to: '//docs.quyx.xyz',
            target: '_blank',
        },
    ];

    useEffect(() => setDisplayNavbar(false), [navigate]);
    useEffect(() => {
        if (displayNavbar) document.body.classList.add('scroll-disabled');
        else document.body.classList.remove('scroll-disabled');
    }, [displayNavbar]);

    return (
        <>
            <nav className="default-nav">
                <div className="marquee">
                    <Marquee pauseOnHover pauseOnClick className="mb-2 main-marquee">
                        <div className="welcome">
                            <hr />
                            <h4>Quyx, says Hi! 👋</h4>
                            <hr />
                        </div>

                        {events.map((event, i) => (
                            <div key={`event-${i}`} className="event">
                                <hr />
                                <AnchorLink to={`/nft/${Address.parse(event.address).toString()}`}>
                                    <div>
                                        <img
                                            src={getAvatar(
                                                event.user.pfp || null,
                                                event.user.username
                                            )}
                                            alt={event.user.username}
                                        />
                                    </div>

                                    <div>
                                        <h5>
                                            <span>{event.user.username}</span>
                                            {event.user.hasBlueTick ? (
                                                <VerifiedIcon height={17} width={17} />
                                            ) : null}
                                        </h5>
                                        <p>
                                            {event.type === 'started_auction'
                                                ? `Started an auction`
                                                : event.type === 'username_assigned'
                                                ? `ended an auction`
                                                : 'triggered an event'}
                                        </p>
                                    </div>
                                </AnchorLink>
                                <hr />
                            </div>
                        ))}
                    </Marquee>

                    <div className="info">
                        <div className="container-fluid container-xl">
                            <p className="px-2">
                                Live blockchain events on Quyx {env.IS_TESTNET ? '(testnet)' : null}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid container-xl">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-between px-2 xxy">
                                <AnchorLink to="/" className="pt-1">
                                    <GradientLogo height={33} width={98} />
                                </AnchorLink>

                                <ul className="d-none d-lg-flex align-items-center main-nav">
                                    {main_navigation.map((item, index) => (
                                        <li key={`navigation-item-${index}`}>
                                            <AnchorLink
                                                className={
                                                    item.to == location.pathname
                                                        ? 'active'
                                                        : location.pathname != '/' &&
                                                          location.pathname != '/team' &&
                                                          location.pathname != '/explore' &&
                                                          item.to == '/'
                                                        ? 'active'
                                                        : ''
                                                }
                                                to={item.to}
                                                target={item.target}
                                            >
                                                {item.title}
                                            </AnchorLink>
                                        </li>
                                    ))}
                                </ul>

                                <div
                                    className="d-flex align-items-center"
                                    style={{ gap: '1.5rem' }}
                                >
                                    {connected && user ? (
                                        <div
                                            className="user d-flex align-items-center"
                                            onClick={() => setDropVisible(true)}
                                            ref={divRef}
                                        >
                                            <div className="position-relative">
                                                <img
                                                    src={getAvatar(user?.pfp!, user?.username!)}
                                                    alt={user?.username}
                                                />

                                                <div
                                                    className={`position-absolute nav-navigate ${
                                                        dropVisible ? 'd-block' : 'd-none'
                                                    }`}
                                                >
                                                    <AnchorLink
                                                        className="top-shi"
                                                        to={`/user/${user ? user.username : ''}`}
                                                    >
                                                        <div>
                                                            <h2>
                                                                {truncateAddress({
                                                                    address: user
                                                                        ? Address.parse(
                                                                              user.address
                                                                          ).toString()
                                                                        : '',
                                                                })}
                                                            </h2>
                                                            <p>Go to profile</p>
                                                        </div>
                                                    </AnchorLink>

                                                    <ul>
                                                        {navigation.map((item, index) =>
                                                            item.isDivider ? (
                                                                <li
                                                                    className="divider"
                                                                    key={`navigation-${index}`}
                                                                />
                                                            ) : (
                                                                <li key={`navigation-${index}`}>
                                                                    <AnchorLink
                                                                        to={item.to!}
                                                                        target={item.target}
                                                                    >
                                                                        <i
                                                                            className={`h h-${item.icon}`}
                                                                        />
                                                                        <span>{item.title}</span>
                                                                    </AnchorLink>
                                                                </li>
                                                            )
                                                        )}

                                                        <li>
                                                            <a onClick={doLogout}>
                                                                {isLogoutLoading ? (
                                                                    <span className="loader-span-sm"></span>
                                                                ) : (
                                                                    <i className="h h-logout" />
                                                                )}

                                                                <span>Logout</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <span>{balance ? balance : '-.--'} TON</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <ConnectBtn />
                                    )}

                                    <div
                                        className="d-block d-lg-none menu pointer"
                                        onClick={() => setDisplayNavbar(true)}
                                    >
                                        <MenuIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`mobile-navbar ${displayNavbar ? 'd-flex' : 'd-none'} d-lg-none`}>
                <div className="close" onClick={() => setDisplayNavbar(false)}>
                    <i className="h h-x" />
                </div>

                <ul>
                    <li>
                        <AnchorLink to="/">
                            <Logo width={50} height={50} fill="#aaa" />
                        </AnchorLink>
                    </li>

                    {main_navigation.map((item, index) => (
                        <li key={`navigation-item-${index}`}>
                            <AnchorLink
                                className={item.to == location.pathname ? 'active' : ''}
                                to={item.to!}
                                target={item.target}
                            >
                                {item.title}
                            </AnchorLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default DefaultNavbar;
