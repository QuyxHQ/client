import { Address, toNano } from 'ton-core';
import useAsyncInitialize from './useAsyncInitialize';
import useTonClient from './useTonClient';
import { AuctionContract } from '../../contract/artefacts/tact_AuctionContract';
import useTonConnect from './useTonConnect';

export default function (address: Address) {
    const { client } = useTonClient();
    const { wallet, sender } = useTonConnect();

    const contract = useAsyncInitialize(async () => {
        if (!client || !address) return;

        const contract = AuctionContract.fromAddress(address);
        return client.open(contract);
    }, [client]);

    async function cancelAuction() {
        if (!contract || !wallet || !client) return;

        try {
            await contract.send(
                sender,
                { value: toNano(0.02) },
                { $$type: 'CancelAuction', query_id: BigInt(Date.now()) }
            );
        } catch (e: any) {
            throw new Error(e);
        }
    }

    async function stopAuction() {
        if (!contract || !wallet || !client) return;

        try {
            await contract.send(
                sender,
                { value: toNano(0.02) },
                { $$type: 'StopAuction', query_id: BigInt(Date.now()) }
            );
        } catch (e: any) {
            throw new Error(e);
        }
    }

    async function newBid() {
        if (!contract || !wallet || !client) return;

        try {
            await contract.send(
                sender,
                { value: toNano(0.02) },
                { $$type: 'NewBid', query_id: BigInt(Date.now()) }
            );
        } catch (e: any) {
            throw new Error(e);
        }
    }

    return {
        contract,
        methods: { cancelAuction, stopAuction, newBid },
    };
}
