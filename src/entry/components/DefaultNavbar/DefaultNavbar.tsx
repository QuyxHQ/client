import { useEffect, useState } from "react";
import { AnchorLink, ConnectBtn, GradientLogo, Logo, MenuIcon } from "..";
import { useLocation, useNavigate } from "react-router-dom";
import useTonConnect from "../../hooks/useTonConnect";

const DefaultNavbar = () => {
  const [displayNavbar, setDisplayNavbar] = useState<boolean>(false);
  const { connected, address } = useTonConnect();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogoutLoading, setIsLogoutLoading] = useState<boolean>(false);

  async function logout() {
    setIsLogoutLoading(true);
    setTimeout(() => setIsLogoutLoading(false), 2000);
  }

  const navigation = [
    {
      title: "Claim username",
      icon: "cast",
      to: "/marketplace",
    },
    {
      title: "Settings",
      icon: "settings",
      to: "/settings",
    },
    {
      isDivider: true,
    },
    {
      title: "Docs",
      icon: "file",
      to: "//docs.quyx.xyz",
      target: "_blank",
    },
    {
      title: "Help center",
      icon: "help-circle",
      to: "mailto:support@quyx.xyz",
      target: "_blank",
    },
    {
      isDivider: true,
    },
  ];

  const main_navigation = [
    { title: "Home", to: "/" },
    { title: "Team", to: "/team" },
    { title: "Market", to: "/market", target: "" },
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
              <div className="d-flex align-items-center justify-content-between px-2">
                <AnchorLink to="/" className="pt-1">
                  <GradientLogo height={33} width={98} />
                </AnchorLink>

                <ul className="d-none d-md-flex align-items-center main-nav">
                  {main_navigation.map((item, index) => (
                    <li key={`navigation-item-${index}`}>
                      <AnchorLink
                        className={item.to == location.pathname ? "active" : ""}
                        to={item.to}
                        target={item.target}
                      >
                        {item.title}
                      </AnchorLink>
                    </li>
                  ))}

                  {!connected ? null : (
                    <li>
                      <AnchorLink
                        className={
                          location.pathname == "/favorites" ||
                          location.pathname == "/settings" ||
                          location.pathname == `/user/${address}`
                            ? "active"
                            : ""
                        }
                        to={`/user/${address}`}
                      >
                        Profile
                      </AnchorLink>
                    </li>
                  )}
                </ul>

                <div className="d-flex align-items-center" style={{ gap: "1.5rem" }}>
                  {connected ? (
                    <div className="user d-flex align-items-center">
                      <div className="position-relative">
                        <img src={"/images/default-user.png"} alt={"Morick"} />

                        <div className="position-absolute nav-navigate">
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
                              <a onClick={() => logout()}>
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

                        <span>0.02 TON</span>
                      </div>
                    </div>
                  ) : (
                    <ConnectBtn />
                  )}

                  <div
                    className="d-block d-md-none menu pointer"
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

      <div className={`mobile-navbar ${displayNavbar ? "d-flex" : "d-none"} d-md-none`}>
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

          {!connected ? null : (
            <li>
              <AnchorLink
                className={
                  location.pathname == "/favorites" ||
                  location.pathname == "/settings" ||
                  location.pathname == `/user/${address}`
                    ? "active"
                    : ""
                }
                to={`/user/${address}`}
              >
                Profile
              </AnchorLink>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default DefaultNavbar;
