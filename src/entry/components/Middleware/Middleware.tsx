import { ConnectBtn, GradientLogo2, Layout, SIWE } from "..";
import { UNPROTECTED_ROUTES } from "../../../utils/constants";
import { useAppStore } from "../../context/AppProvider";

const Middleware = ({ children }: { children: React.JSX.Element }) => {
  const { isWalletConnected, isMounting, isLoggedIn } = useAppStore();

  return isMounting || typeof isWalletConnected == "undefined" ? (
    "mounting..."
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
