import { Address } from 'ton-core';
import useAsyncInitialize from './useAsyncInitialize';
import useTonClient from './useTonClient';
import { AuctionContract } from '../../contract/artefacts/tact_AuctionContract';

export default function (address: Address) {
    const { client } = useTonClient();

    const contract = useAsyncInitialize(async () => {
        if (!client || !address) return;

        const contract = AuctionContract.fromAddress(address);
        return client.open(contract);
    }, [client]);

    return {
        contract,
        methods: {},
    };
}
