import { Address } from "@ton/core";
import useAsyncInitialize from "./useAsyncInitialize";
import useTonClient from "./useTonClient";
import useTonConnect from "./useTonConnect";
import { UNftItem } from "../../contract/wrappers/UNftItem";

function useUsernameItemContract(contract_address: Address) {
  const { client } = useTonClient();
  const { network } = useTonConnect();

  const usernameItemContract = useAsyncInitialize(async () => {
    if (!client) return;

    const contract = UNftItem.fromAddress(contract_address);
    return client.open(contract);
  }, [client, network]);

  return usernameItemContract;
}

export default useUsernameItemContract;
