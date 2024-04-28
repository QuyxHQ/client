import { CHAIN, THEME, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { Sender, SenderArguments, address } from "@ton/core";
import { useEffect } from "react";

type TonConnect = {
  sender: Sender;
  connected: boolean;
  wallet: string | null;
  network: CHAIN | null;
  address: string | null;
};

function useTonConnect(): TonConnect {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();

  useEffect(() => {
    tonConnectUI.uiOptions = { uiPreferences: { theme: THEME.DARK } };
    tonConnectUI.setConnectRequestParameters({ state: "loading" });

    setTimeout(() => {
      tonConnectUI.setConnectRequestParameters({
        state: "ready",
        value: { tonProof: "test payload hahahaha" },
      });
    }, 2000);

    tonConnectUI.onStatusChange((wallet) => {
      console.log(wallet);

      if (wallet && wallet.connectItems?.tonProof && "proof" in wallet.connectItems.tonProof) {
        // checkProofInYourBackend(wallet.connectItems.tonProof.proof, wallet.account);
        console.log("Proof:", wallet.connectItems.tonProof.proof);
        console.log(wallet.account);
      }
    });
  }, []);

  return {
    sender: {
      send: async (args: SenderArguments) => {
        tonConnectUI.sendTransaction({
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString("base64"),
            },
          ],
          validUntil: Date.now() + 5 * 60 * 1000,
        });
      },
      address: wallet?.account.address ? address(wallet.account.address) : undefined,
    },
    connected: !!wallet?.account.address,
    wallet: wallet?.account.address ?? null,
    network: wallet?.account.chain ?? null,
    address: wallet?.account.address ? address(wallet.account.address).toString() : null,
  };
}

export default useTonConnect;
