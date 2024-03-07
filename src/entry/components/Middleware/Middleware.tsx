import { useEffect } from "react";
import { ConnectBtn, Layout, Logo, SIWE } from "..";
import { DEFAULT_CHAIN, UNPROTECTED_ROUTES } from "../../../utils/constants";
import { useAppStore } from "../../context/AppProvider";
import { useLocation } from "react-router-dom";

const Middleware = ({ children }: { children: React.JSX.Element }) => {
  const location = useLocation();

  const {
    isWalletConnected,
    isMounting,
    isLoggedIn,
    isNetworkSupported,
    openModal,
    setModalBody,
    switchChain,
    closeModal,
  } = useAppStore();

  useEffect(() => {
    (function () {
      if (!isNetworkSupported) {
        setModalBody(
          <div className="kyc-modal py-4 px-3">
            <h2>Wrong Chain</h2>

            <div className="alert">
              <div>
                <i className="h h-alert-triangle" />
              </div>
              <p>
                Heads up! You are connected to the wrong chain...click the button below to switch
                chain
              </p>
            </div>

            <div className="buttons">
              <button
                className="gradient-border"
                onClick={() => switchChain(DEFAULT_CHAIN.chainId)}
              >
                Switch Chain
              </button>
            </div>
          </div>
        );
        openModal(false);
      }

      if (isNetworkSupported) closeModal();
    })();
  }, [isNetworkSupported]);

  useEffect(() => {
    (function () {
      if (!isWalletConnected) return;
      if (!isLoggedIn && !UNPROTECTED_ROUTES.includes(location.pathname)) {
        setModalBody(<SIWE />);
        openModal();
      }
    })();
  }, [isWalletConnected, isLoggedIn, location]);

  useEffect(() => {
    (function () {
      if (isMounting) return;

      if (isWalletConnected == false && !UNPROTECTED_ROUTES.includes(location.pathname)) {
        setModalBody(
          <div className="siwe">
            <h3>Connect wallet</h3>
            <p>
              Let's get you all fixed up to get the best out of Quyx. Get onboard with quyx with
              your web3 wallet
            </p>

            <div className="buttons">
              <a href="https://ethereum.org/en/wallets" target="_blank" className="w-100">
                <button className="w-100" onClick={closeModal}>
                  Learn more
                </button>
              </a>

              <ConnectBtn />
            </div>
          </div>
        );
        openModal();
      }
    })();
  }, [isWalletConnected, location, isMounting]);

  return isMounting || typeof isWalletConnected == "undefined" ? (
    <div
      className="middleware-loader d-flex align-items-center justify-content-center w-100"
      style={{ height: "100vh" }}
    >
      <Logo width={60} height={60} fill="#666" />
    </div>
  ) : (
    <Layout children={children} />
  );
};

export default Middleware;
