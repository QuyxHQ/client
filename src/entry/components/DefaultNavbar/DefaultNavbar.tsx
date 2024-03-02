import { AnchorLink, GradientLogo, MenuIcon } from "..";
import { ConnectWallet } from "@thirdweb-dev/react";

const DefaultNavbar = () => {
  const navigation = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "marketplace", to: "/marketplace" },
    { title: "Docs", to: "//docs.quyx.xyz", target: "_blank" },
  ];

  return (
    <nav className="default-nav">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between px-2">
              <AnchorLink to="/">
                <GradientLogo height={35} width={104} />
              </AnchorLink>
              <ul className="d-none d-lg-flex align-items-center">
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
                {location.pathname == "/" ? (
                  <AnchorLink to="/dashboard">
                    <button className="gradient-border d-none d-sm-flex">Launch App</button>
                  </AnchorLink>
                ) : (
                  <ConnectWallet className="gradient-border" btnTitle="Login web3" />
                )}

                <div className="d-block d-lg-none menu pointer">
                  <MenuIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DefaultNavbar;
