import { createContext } from "react";
import { ethers } from "ethers";

const AppContext = createContext<AppContextProps & { signer?: ethers.Signer }>({
  isMounting: true,
  isLoggedIn: false,
  displayModal: false,
  isNetworkSupported: false,
  canCloseModal: true,
  closeModal() {},
  openModal() {},
  async switchChain() {},
  setModalBody() {},
  setUserInfo() {},
});

export default AppContext;
