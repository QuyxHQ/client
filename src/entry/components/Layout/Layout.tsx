import { useLocation } from "react-router-dom";
import { ConnectBtn, DefaultNavbar, Footer, Navbar } from "..";
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
          <p>Howdy! You are currently on the testnet</p>
        </div>
      ) : null}

      {location.pathname == "/" ||
      location.pathname == "/about" ||
      location.pathname == "/team" ||
      location.pathname == "/pricing" ||
      (!connected && UNPROTECTED_ROUTES.includes(location.pathname)) ? (
        <DefaultNavbar />
      ) : (
        <Navbar />
      )}

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
