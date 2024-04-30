import { CHAIN, THEME, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { Sender, SenderArguments, address } from "@ton/core";
import { useEffect } from "react";
import { apiSdk } from "../../utils/api.utils";
import { useAppContext } from "../context/AppProvider";

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
  const { login } = useAppContext();

  useEffect(() => {
    tonConnectUI.uiOptions = { uiPreferences: { theme: THEME.DARK } };
    tonConnectUI.setConnectRequestParameters({ state: "loading" });

    (async function () {
      const token = await apiSdk.generateToken();
      if (!token) tonConnectUI.setConnectRequestParameters(null);
      else {
        tonConnectUI.setConnectRequestParameters({
          state: "ready",
          value: { tonProof: token },
        });
      }
    })();

    tonConnectUI.onStatusChange(async (wallet) => {
      if (wallet && wallet.connectItems?.tonProof && "proof" in wallet.connectItems.tonProof) {
        const user = await apiSdk.login(wallet);
        if (user) login(user);
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
