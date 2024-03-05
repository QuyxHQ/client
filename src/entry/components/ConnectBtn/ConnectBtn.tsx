import { ConnectWallet } from "@thirdweb-dev/react";
import { useAppStore } from "../../context/AppProvider";
import { SIWE } from "..";

const ConnectBtn = () => {
  const { openModal, setModalBody } = useAppStore();

  function promptSignIn() {
    const accessToken = localStorage.getItem("quyx_user_access_token");
    const refreshToken = localStorage.getItem("quyx_user_refresh_token");

    if (!accessToken || !refreshToken) {
      setModalBody(<SIWE />);
      openModal();
    }
  }

  return (
    <ConnectWallet
      className="gradient-border"
      btnTitle="Connect"
      onConnect={promptSignIn}
      switchToActiveChain
    />
  );
};

export default ConnectBtn;
