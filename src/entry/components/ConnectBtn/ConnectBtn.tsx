import { useTonConnectModal } from "@tonconnect/ui-react";
import { TonIcon } from "..";

const ConnectBtn = () => {
  const { open } = useTonConnectModal();

  return (
    <button className="gradient-border" onClick={open}>
      <TonIcon size={18} />
      <span style={{ fontWeight: 500 }}>Connect</span>
    </button>
  );
};

export default ConnectBtn;
