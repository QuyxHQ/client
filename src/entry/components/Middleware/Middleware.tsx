import { UNPROTECTED_ROUTES } from "../../../utils/constants";
import { useAppStore } from "../../context/AppProvider";

const Middleware = ({ children }: { children: React.JSX.Element }) => {
  const { isWalletConnected, isMounting, isLoggedIn } = useAppStore();

  return isMounting || typeof isWalletConnected == "undefined"
    ? null
    : !isWalletConnected && !UNPROTECTED_ROUTES.includes(location.pathname)
    ? "Connect wallet"
    : !isLoggedIn && !UNPROTECTED_ROUTES.includes(location.pathname)
    ? "Login"
    : children;
};

export default Middleware;
