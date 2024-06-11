import { Address, toNano } from 'ton-core';
import useAsyncInitialize from './useAsyncInitialize';
import useTonClient from './useTonClient';
import useTonConnect from './useTonConnect';
import { NftItem } from '../../contract/artefacts/tact_NftItem';

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

    async function transfer() {
        if (!contract || !wallet) return;
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
        if (!contract || !wallet) return;
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
