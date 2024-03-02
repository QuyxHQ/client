import { createContext } from "react";
import { ethers } from "ethers";

const AppContext = createContext<AppContextProps & { signer?: ethers.Signer }>({
  isMounting: true,
  isLoggedIn: false,
});

export default AppContext;
