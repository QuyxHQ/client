import { address } from "@ton/core";
import { CNftCollection } from "../../contract/wrappers/CNftCollection";
import useAsyncInitialize from "./useAsyncInitialize";
import useTonClient from "./useTonClient";
import useTonConnect from "./useTonConnect";
import { MAINNET_ADDRESSES, TESTNET_ADDRESSES } from "../../utils/constants";
import { CHAIN } from "@tonconnect/ui-react";

function useCardCollectionContract() {
  const { client } = useTonClient();
  const { network } = useTonConnect();

  const cardCollectionContract = useAsyncInitialize(async () => {
    if (!client || !network) return;

    const contract = CNftCollection.fromAddress(
      network == CHAIN.MAINNET ? address(MAINNET_ADDRESSES.card) : address(TESTNET_ADDRESSES.card)
    );

    return client.open(contract);
  }, [client, network]);

  return cardCollectionContract;
}

export default useCardCollectionContract;
