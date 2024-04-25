import { useTonConnectModal } from "@tonconnect/ui-react";

const ConnectBtn = () => {
  const { open } = useTonConnectModal();

  return (
    <button className="gradient-border" onClick={open}>
      Connect wallet
    </button>
  );
};

export default ConnectBtn;
