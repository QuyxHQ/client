import { Address } from "@ton/core";
import useAsyncInitialize from "./useAsyncInitialize";
import useTonClient from "./useTonClient";
import useTonConnect from "./useTonConnect";
import { CNftItem } from "../../contract/wrappers/CNftItem";

function useCardItemContract(contract_address: Address) {
  const { client } = useTonClient();
  const { network } = useTonConnect();

  const cardItemContract = useAsyncInitialize(async () => {
    if (!client) return;

    const contract = CNftItem.fromAddress(contract_address);
    return client.open(contract);
  }, [client, network]);

  return cardItemContract;
}

export default useCardItemContract;
