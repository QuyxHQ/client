import { useEffect, useState } from "react";
import { AnchorLink, ConnectBtn, GradientLogo, Logo, MenuIcon } from "..";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppProvider";
import { apiSdk } from "../../../utils/api.utils";
import { Address } from "@ton/core";
import { truncateAddress } from "../../../utils/helper";
import useTonClient from "../../hooks/useTonClient";

const DefaultNavbar = () => {
  const [displayNavbar, setDisplayNavbar] = useState<boolean>(false);
  const [isLogoutLoading, setIsLogoutLoading] = useState<boolean>(false);
  const [balance, setBalance] = useState<string>();

  const { logout, user, isConnected: connected } = useAppContext();
  const { client } = useTonClient();

  useEffect(() => {
    (async function () {
      if (!client || !user) return;

      const balance = await client.getBalance(Address.parse(user.address));
      setBalance(parseFloat((Number(balance) / 1_000_000_000).toFixed(2)).toLocaleString());
    })();
  }, [client, user]);

  const navigate = useNavigate();
  const location = useLocation();

  async function doLogout() {
    setIsLogoutLoading(true);
    await apiSdk.logout();
    logout();

    setIsLogoutLoading(false);
  }

  const navigation = [
    { title: "Claim username", icon: "cast", to: "//t.me/QuyxBot?start", target: "_blank" },
    { title: "Mint Card", icon: "plus", to: "/mint" },
    { title: "Settings", icon: "settings", to: "/settings" },
    { isDivider: true },
    { title: "Docs", icon: "file", to: "//docs.quyx.xyz", target: "_blank" },
    { title: "Help center", icon: "help-circle", to: "mailto:support@quyx.xyz", target: "_blank" },
    { isDivider: true },
  ];

  const main_navigation = [
    { title: "Home", to: "/" },
    { title: "Team", to: "/team" },
    { title: "Explore", to: "/explore" },
    { title: "Whitepaper", to: "/whitepaper.pdf", target: "_blank" },
  ];

  useEffect(() => setDisplayNavbar(false), [navigate]);
  useEffect(() => {
    if (displayNavbar) document.body.classList.add("scroll-disabled");
    else document.body.classList.remove("scroll-disabled");
  }, [displayNavbar]);

  return (
    <>
      <nav className="default-nav">
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
                            ? "active"
                            : location.pathname != "/" &&
                              location.pathname != "/explore" &&
                              item.to == "/"
                            ? "active"
                            : ""
                        }
                        to={item.to}
                        target={item.target}
                      >
                        {item.title}
                      </AnchorLink>
                    </li>
                  ))}
                </ul>

                <div className="d-flex align-items-center" style={{ gap: "1.5rem" }}>
                  {connected ? (
                    <div className="user d-flex align-items-center">
                      <div className="position-relative">
                        <img
                          src={user?.pfp ? user.pfp : "/images/default-user.png"}
                          alt={user?.username}
                        />

                        <div className="position-absolute nav-navigate">
                          <AnchorLink className="top-shi" to={`/user/${user ? user.username : ""}`}>
                            <div>
                              <h2>
                                {truncateAddress({
                                  address: user ? Address.parse(user.address).toString() : "",
                                })}
                              </h2>
                              <p>Go to dashboard</p>
                            </div>
                          </AnchorLink>

                          <ul>
                            {navigation.map((item, index) =>
                              item.isDivider ? (
                                <li className="divider" key={`navigation-${index}`} />
                              ) : (
                                <li key={`navigation-${index}`}>
                                  <AnchorLink to={item.to!} target={item.target}>
                                    <i className={`h h-${item.icon}`} />
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

                        <span>{balance ? balance : "-.--"} TON</span>
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

      <div className={`mobile-navbar ${displayNavbar ? "d-flex" : "d-none"} d-lg-none`}>
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
                className={item.to == location.pathname ? "active" : ""}
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
