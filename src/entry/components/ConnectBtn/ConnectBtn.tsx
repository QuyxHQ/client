import { ConnectWallet } from "@thirdweb-dev/react";
import { useAppStore } from "../../context/AppProvider";
import { SIWE } from "..";

const ConnectBtn = () => {
  const { openModal, setModalBody } = useAppStore();

  function promptSignIn() {
    setModalBody(<SIWE />);
    openModal();
  }

  return <ConnectWallet className="gradient-border" btnTitle="Connect" onConnect={promptSignIn} />;
};

export default ConnectBtn;
