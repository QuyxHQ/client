import { createContext } from "react";
import { ethers } from "ethers";

const AppContext = createContext<AppContextProps & { signer?: ethers.Signer }>({
  isMounting: true,
  isLoggedIn: false,
  displayModal: false,
  isNetworkSupported: false,
  closeModal() {},
  openModal() {},
  async switchChain() {},
  setModalBody() {},
});

export default AppContext;
