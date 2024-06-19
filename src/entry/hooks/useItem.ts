import { Address, beginCell, toNano } from 'ton-core';
import useAsyncInitialize from './useAsyncInitialize';
import useTonClient from './useTonClient';
import useTonConnect from './useTonConnect';
import { NftItem, Transfer } from '../../contract/artefacts/tact_NftItem';

export default function (address: Address) {
    const { client } = useTonClient();
    const { wallet, sender } = useTonConnect();

    const contract = useAsyncInitialize(async () => {
        if (!client || !address) return;

        const contract = NftItem.fromAddress(address);
        return client.open(contract);
    }, [client]);

    async function getNftItemData() {
        if (!contract) return;
        return await contract.getGetNftData();
    }

    async function getNftAuctionInfo() {
        if (!contract) return;
        return await contract.getGetAuctionInfo();
    }

    async function getNftDomain() {
        if (!contract) return;
        return await contract.getGetDomain();
    }

    async function transfer(to: Address) {
        if (!contract || !wallet || !client) return;

        try {
            const message: Transfer = {
                $$type: 'Transfer',
                query_id: BigInt(Date.now()),
                custom_payload: null,
                forward_amount: 1n,
                forward_payload: beginCell().endCell(),
                new_owner: to,
                response_destination: Address.parse(wallet),
            };

            await contract.send(sender, { value: toNano(0.05) }, message);
        } catch (e: any) {
            throw new Error(e);
        }
    }

    async function placeBid(bid: number) {
        if (!contract || !wallet || !client) return;

        try {
            const balance = await client.getBalance(Address.parse(wallet));
            const value = toNano(bid);

            if (value > balance) throw new Error('Insufficient balance');
            await contract.send(sender, { value }, null);
        } catch (e: any) {
            throw new Error(e);
        }
    }

    async function completeAuction() {
        if (!contract || !wallet || !client) return;

        try {
            await contract.send(
                sender,
                { value: toNano(0.02) },
                {
                    $$type: 'CompleteAuction',
                    query_id: 0n,
                }
            );
        } catch (e: any) {
            throw new Error(e);
        }
    }

    return {
        contract,
        methods: {
            transfer,
            placeBid,
            getNftDomain,
            getNftItemData,
            completeAuction,
            getNftAuctionInfo,
        },
    };
}
