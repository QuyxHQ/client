import { useEffect } from "react";
import { ConnectBtn, GradientLogo2, Layout, Logo, SIWE } from "..";
import { DEFAULT_CHAIN, UNPROTECTED_ROUTES } from "../../../utils/constants";
import { useAppStore } from "../../context/AppProvider";

const Middleware = ({ children }: { children: React.JSX.Element }) => {
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

  return isMounting || typeof isWalletConnected == "undefined" ? (
    <div
      className="middleware-loader d-flex align-items-center justify-content-center w-100"
      style={{ height: "100vh" }}
    >
      <Logo width={60} height={60} fill="#666" />
    </div>
  ) : !isWalletConnected && !UNPROTECTED_ROUTES.includes(location.pathname) ? (
    <ConnectWallet />
  ) : !isLoggedIn && !UNPROTECTED_ROUTES.includes(location.pathname) ? (
    <LoginWallet />
  ) : (
    <Layout children={children} />
  );
};

const ConnectWallet = () => {
  return (
    <div
      className="connect-wallet-screen w-100 d-flex flex-column flex-md-row align-items-md-center justify-content-center px-2"
      style={{ height: "100dvh" }}
    >
      <div className="main d-flex flex-column px-2">
        <div className="d-flex align-items-center and-hr">
          <hr />
          <GradientLogo2 width={50} height={50} />
        </div>

        <h1>Connect wallet</h1>
        <p>
          In order to get started with Quyx, you are required to connect to the service with a web3
          wallet
        </p>

        <div className="buttons d-flex align-items-center">
          <button className="learn">Learn more</button>
          <ConnectBtn />
        </div>
      </div>
    </div>
  );
};

const LoginWallet = () => {
  const { setModalBody, openModal } = useAppStore();

  return (
    <div
      className="connect-wallet-screen w-100 d-flex flex-column flex-md-row align-items-md-center justify-content-center px-2"
      style={{ height: "100dvh" }}
    >
      <div className="main d-flex flex-column px-2">
        <div className="d-flex align-items-center and-hr">
          <hr />
          <GradientLogo2 width={50} height={50} />
        </div>

        <h1>Sign in with Ethereum</h1>
        <p>
          One more thing! we need you to sign a message before granting you access to Quyx. Click on
          "Proceed" to contine
        </p>

        <div className="buttons d-flex align-items-center">
          <button className="learn">Learn more</button>
          <button
            className="gradient-border"
            onClick={() => {
              setModalBody(<SIWE />);
              openModal();
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Middleware;
