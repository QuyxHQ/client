import { useState } from "react";
import { api } from "../../../utils/class/api.class";
import { useAppStore } from "../../context/AppProvider";
import { TOAST_STATUS, customToast } from "../../../utils/toast.utils";

const SIWE = () => {
  const { address, chainId, signer, closeModal } = useAppStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function siwe() {
    if (!address || !chainId || !signer) return;

    try {
      setIsLoading(true);

      const message = await api.prepareMessage({ address, chainId });
      if (message) {
        const signature = await signer.signMessage(message.prepareMessage());
        const resp = await api.login({ address, message, signature });

        if (resp) window.location.reload();
      }
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: "unable to complete operation",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="siwe">
      <h3>Agree & Sign</h3>
      <p>
        By connecting your wallet and using Quyx, you agree to our&nbsp;
        <a href="/tos" target="_blank">
          Terms of Service
        </a>
        &nbsp;and&nbsp;
        <a href="/privacy-policy" target="_blank">
          Privay Policy
        </a>
      </p>

      <div className="buttons">
        <button onClick={closeModal}>Cancel</button>
        <button className="gradient-border" onClick={siwe} disabled={isLoading}>
          {isLoading ? "Processing..." : "Proceed to sign"}
        </button>
      </div>
    </div>
  );
};

export default SIWE;
