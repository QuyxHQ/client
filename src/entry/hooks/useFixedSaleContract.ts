import { Address, toNano } from 'ton-core';
import useAsyncInitialize from './useAsyncInitialize';
import useTonClient from './useTonClient';
import { FixedSaleContract } from '../../contract/artefacts/tact_FixedSaleContract';
import useTonConnect from './useTonConnect';

export default function (address: Address) {
    const { client } = useTonClient();
    const { wallet, sender } = useTonConnect();

    const contract = useAsyncInitialize(async () => {
        if (!client || !address) return;

        const contract = FixedSaleContract.fromAddress(address);
        return client.open(contract);
    }, [client]);

    async function cancelSale() {
        if (!contract || !wallet || !client) return;

        try {
            await contract.send(
                sender,
                { value: toNano(0.02) },
                { $$type: 'CancelSale', query_id: BigInt(Date.now()) }
            );
        } catch (e: any) {
            throw new Error(e);
        }
    }

    async function buy() {
        if (!contract || !wallet || !client) return;

        try {
            await contract.send(
                sender,
                { value: toNano(0.02) },
                { $$type: 'BuyNFT', query_id: BigInt(Date.now()) }
            );
        } catch (e: any) {
            throw new Error(e);
        }
    }

    return {
        contract,
        methods: { cancelSale, buy },
    };
}
