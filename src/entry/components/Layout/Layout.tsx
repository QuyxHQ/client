import { AnchorLink, DefaultNavbar, Footer, Navbar } from "..";
import { UNPROTECTED_ROUTES } from "../../../utils/constants";
import { useAppStore } from "../../context/AppProvider";

const Layout = ({ children }: { children: React.JSX.Element }) => {
  const { isWalletConnected, userInfo } = useAppStore();

  return (
    <>
      {!userInfo ? null : userInfo && userInfo.hasCompletedKYC ? null : (
        <div className="top-nav">
          <p>
            Howdy! KYC not yet done, click <AnchorLink to="/settings">here</AnchorLink> to begin KYC
          </p>
        </div>
      )}

      {location.pathname == "/" ||
      location.pathname == "/about" ||
      location.pathname == "/team" ||
      location.pathname == "/pricing" ||
      (!isWalletConnected && UNPROTECTED_ROUTES.includes(location.pathname)) ? (
        <DefaultNavbar />
      ) : (
        <Navbar />
      )}

      {children}

      {UNPROTECTED_ROUTES.includes(location.pathname) && location.pathname != "/marketplace" ? (
        <Footer />
      ) : (
        <footer className="custom mt-auto pb-5"></footer>
      )}
    </>
  );
};

export default Layout;
