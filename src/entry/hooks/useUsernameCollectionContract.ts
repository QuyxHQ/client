import { address } from "@ton/core";
import useAsyncInitialize from "./useAsyncInitialize";
import useTonClient from "./useTonClient";
import useTonConnect from "./useTonConnect";
import { MAINNET_ADDRESSES, TESTNET_ADDRESSES } from "../../utils/constants";
import { CHAIN } from "@tonconnect/ui-react";
import { UNftCollection } from "../../wrappers/UNftCollection";

function useUsernameCollectionContract() {
  const { client } = useTonClient();
  const { network } = useTonConnect();

  const cardCollectionContract = useAsyncInitialize(async () => {
    if (!client || !network) return;

    const contract = UNftCollection.fromAddress(
      network == CHAIN.MAINNET
        ? address(MAINNET_ADDRESSES.username)
        : address(TESTNET_ADDRESSES.username)
    );

    return client.open(contract);
  }, [client, network]);

  return cardCollectionContract;
}

export default useUsernameCollectionContract;
