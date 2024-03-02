import { DefaultNavbar, Footer, Navbar } from "..";
import { UNPROTECTED_ROUTES } from "../../../utils/constants";

const Layout = ({ children }: { children: React.JSX.Element }) => {
  return (
    <>
      {UNPROTECTED_ROUTES.includes(location.pathname) ? <DefaultNavbar /> : <Navbar />}

      {children}

      {UNPROTECTED_ROUTES.includes(location.pathname) ? (
        <Footer />
      ) : (
        <footer>Custom footer here</footer>
      )}
    </>
  );
};

export default Layout;
