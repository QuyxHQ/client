import { ConnectWallet } from "@thirdweb-dev/react";

const ConnectBtn = () => {
  return (
    <ConnectWallet
      className="gradient-border"
      btnTitle="Connect"
      onConnect={(wallet) => console.log(wallet)}
    />
  );
};

export default ConnectBtn;
