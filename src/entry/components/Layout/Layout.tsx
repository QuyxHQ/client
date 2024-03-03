import { DefaultNavbar, Footer, Navbar } from "..";
import { UNPROTECTED_ROUTES } from "../../../utils/constants";
import { useAppStore } from "../../context/AppProvider";

const Layout = ({ children }: { children: React.JSX.Element }) => {
  const { isWalletConnected } = useAppStore();

  return (
    <>
      {location.pathname == "/" ||
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
