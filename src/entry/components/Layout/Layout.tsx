import { DefaultNavbar, Footer } from "..";
import { useAppContext } from "../../context/AppProvider";
import useTonConnect from "../../hooks/useTonConnect";
import { CHAIN } from "@tonconnect/sdk";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { network } = useTonConnect();
  const { isConnected: connected } = useAppContext();

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

      {children}

      <Footer />
    </>
  );
};

export default Layout;
