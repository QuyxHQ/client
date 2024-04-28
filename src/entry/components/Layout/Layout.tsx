import { useLocation } from "react-router-dom";
import { ConnectBtn, DefaultNavbar, Footer } from "..";
import { UNPROTECTED_ROUTES } from "../../../utils/constants";
import useTonConnect from "../../hooks/useTonConnect";
import { CHAIN } from "@tonconnect/sdk";

const Layout = ({ children }: { children: React.JSX.Element }) => {
  const { connected, network } = useTonConnect();
  const location = useLocation();

  return (
    <>
      {connected && network && network == CHAIN.TESTNET ? (
        <div className="top-nav">
          <p>
            <i className="h h-alert-triangle" />
            <span>
              <strong>Heads up!</strong>
              <span>You are currently on the testnet</span>
            </span>
          </p>
        </div>
      ) : null}

      <DefaultNavbar />

      {!connected && !UNPROTECTED_ROUTES.includes(location.pathname) ? (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column align-items-center justify-content-center mt-5 layout-loader">
                <div className="loader-span"></div>
                <h4>Connect wallet</h4>
                <p>
                  Oops! you need to connect with a compactible TON wallet before you will allowed to
                  view this page
                </p>

                <ConnectBtn />
              </div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}

      <Footer />
    </>
  );
};

export default Layout;
