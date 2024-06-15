import { Address } from 'ton-core';
import useAsyncInitialize from './useAsyncInitialize';
import useTonClient from './useTonClient';
import { FixedSaleContract } from '../../contract/artefacts/tact_FixedSaleContract';

export default function (address: Address) {
    const { client } = useTonClient();

    const contract = useAsyncInitialize(async () => {
        if (!client || !address) return;

        const contract = FixedSaleContract.fromAddress(address);
        return client.open(contract);
    }, [client]);

    return {
        contract,
        methods: {},
    };
}
