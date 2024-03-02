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

      <div className="container">
        <div className="row">
          <div className="col-12">{children}</div>
        </div>
      </div>

      {UNPROTECTED_ROUTES.includes(location.pathname) && location.pathname != "/marketplace" ? (
        <Footer />
      ) : (
        <footer>Custom footer here</footer>
      )}
    </>
  );
};

export default Layout;
