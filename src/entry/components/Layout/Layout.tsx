import { useLocation } from "react-router-dom";
import { AnchorLink, ConnectBtn, DefaultNavbar, Footer, Navbar, SIWE } from "..";
import { UNPROTECTED_ROUTES } from "../../../utils/constants";
import { useAppStore } from "../../context/AppProvider";

const Layout = ({ children }: { children: React.JSX.Element }) => {
  const { isWalletConnected, userInfo, isLoggedIn, setModalBody, openModal } = useAppStore();
  const location = useLocation();

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

      {(!isWalletConnected || !isLoggedIn) && !UNPROTECTED_ROUTES.includes(location.pathname) ? (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column align-items-center justify-content-center mt-5 layout-loader">
                <div className="loader-span"></div>

                {!isWalletConnected ? (
                  <>
                    <h4>Connect wallet</h4>
                    <p>
                      Oops! you need to connect with you web3 wallet before you will allowed to view
                      this page
                    </p>

                    <ConnectBtn />
                  </>
                ) : (
                  <>
                    <h4>Sign-in Required</h4>
                    <p>
                      Oops! you need to sign in with your web3 wallet before you will allowed to
                      view this page
                    </p>

                    <button
                      className="gradient-border"
                      onClick={() => {
                        setModalBody(<SIWE />);
                        openModal();
                      }}
                    >
                      Open sign-in modal
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}

      {UNPROTECTED_ROUTES.includes(location.pathname) && location.pathname != "/marketplace" ? (
        <Footer />
      ) : (
        <footer className="custom mt-auto pb-5"></footer>
      )}
    </>
  );
};

export default Layout;
