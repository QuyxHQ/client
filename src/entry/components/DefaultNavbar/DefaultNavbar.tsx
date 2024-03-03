import { useEffect, useState } from "react";
import { AnchorLink, ConnectBtn, GradientLogo, Logo, MenuIcon } from "..";
import { useNavigate } from "react-router-dom";

const DefaultNavbar = () => {
  const [displayNavbar, setDisplayNavbar] = useState<boolean>(false);
  const navigate = useNavigate();

  const navigation = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Marketplace", to: "/marketplace" },
    { title: "Docs", to: "//docs.quyx.xyz", target: "_blank" },
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
                <AnchorLink to="/">
                  <GradientLogo height={33} width={98} />
                </AnchorLink>

                <ul className="d-none d-md-flex align-items-center main-nav">
                  {navigation.map((item, index) => (
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
                </ul>

                <div className="d-flex align-items-center" style={{ gap: "1.5rem" }}>
                  {location.pathname == "/marketplace" ? (
                    <ConnectBtn />
                  ) : (
                    <AnchorLink to="/dashboard">
                      <button className="gradient-border">Launch App</button>
                    </AnchorLink>
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

          {navigation.map((item, index) => (
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
        </ul>
      </div>
    </>
  );
};

export default DefaultNavbar;
