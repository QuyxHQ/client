import { useTonConnectModal } from "@tonconnect/ui-react";
import { TonIcon } from "..";
import { useIsConnectionRestored } from "@tonconnect/ui-react";
import { useAppContext } from "../../context/AppProvider";

const ConnectBtn = () => {
  const { open } = useTonConnectModal();
  const { isMounting } = useAppContext();
  const connectionRestored = useIsConnectionRestored();

  return (
    <button
      className="gradient-border"
      onClick={connectionRestored && !isMounting ? open : () => {}}
    >
      {connectionRestored && !isMounting ? (
        <>
          <TonIcon size={18} />
          <span style={{ fontWeight: 500 }}>Connect</span>
        </>
      ) : (
        <div className="px-4">
          <span className="loader-span-sm" />
        </div>
      )}
    </button>
  );
};

export default ConnectBtn;
