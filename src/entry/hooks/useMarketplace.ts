import { Address, beginCell, toNano } from 'ton-core';
import env from '../../utils/env';
import useAsyncInitialize from './useAsyncInitialize';
import useTonClient from './useTonClient';
import useTonConnect from './useTonConnect';
import { MarketplaceContract } from '../../contract/artefacts/tact_MarketplaceContract';
import { NftItem } from '../../contract/artefacts/tact_NftItem';
import { NftCollection } from '../../contract/artefacts/tact_NftCollection';

export default function () {
    const { client } = useTonClient();
    const { wallet, sender } = useTonConnect();

    const contract = useAsyncInitialize(async () => {
        if (!client) return;

        const contract = MarketplaceContract.fromAddress(Address.parse(env.MARKETPLACE_ADDR));
        return client.open(contract);
    }, [client]);

    async function getId() {
        if (!contract) return;
        return await contract.getGetId();
    }

    async function startAuctionSale(
        nft_addr: Address,
        min_bid: number,
        end_date: number,
        min_step: number = 5, // next bid must be 5% more than previous
        max_bid: number = 0,
        step_time: number = 60 * 30 // 30 minutes extra
    ) {
        if (!contract || !wallet || !client) return;

        try {
            const collection = client.open(
                NftCollection.fromAddress(Address.parse(env.CONTRACT_ADDR))
            );

            const royaltyParams = await collection.getGetRoyaltyParams();
            console.log(royaltyParams);

            const fees = beginCell()
                .storeAddress(Address.parse(env.MARKETPLACE_FEE_ADDR))
                .storeUint(3, 32)
                .storeUint(100, 32)
                .storeAddress(royaltyParams.destination)
                .storeUint(royaltyParams.numerator, 32)
                .storeUint(royaltyParams.denominator, 32)
                .endCell();

            const auction = beginCell()
                .storeCoins(toNano(min_bid))
                .storeCoins(toNano(max_bid))
                .storeUint(min_step, 8)
                .storeUint(end_date, 32)
                .storeUint(step_time, 16)
                .endCell();

            const body = beginCell().storeUint(1, 8).storeRef(fees).storeRef(auction).endCell();
            const nftContract = client.open(NftItem.fromAddress(nft_addr));

            await nftContract.send(
                sender,
                { value: toNano(0.15) },
                {
                    $$type: 'Transfer',
                    query_id: 0n,
                    custom_payload: null,
                    forward_amount: toNano(0.1),
                    forward_payload: body,
                    new_owner: Address.parse(env.MARKETPLACE_ADDR),
                    response_destination: Address.parse(wallet),
                }
            );
        } catch (e: any) {
            throw new Error(e);
        }
    }

    async function startFixedSale(nft_addr: Address, price: number) {
        if (!contract || !wallet || !client) return;

        try {
            const collection = client.open(
                NftCollection.fromAddress(Address.parse(env.CONTRACT_ADDR))
            );

            const royaltyParams = await collection.getGetRoyaltyParams();

            const mp_fee = (price * 3) / 100;
            const royalty_fee =
                (price * Number(royaltyParams.numerator)) / Number(royaltyParams.denominator);

            const fees = beginCell()
                .storeAddress(Address.parse(env.MARKETPLACE_FEE_ADDR))
                .storeCoins(toNano(mp_fee))
                .storeAddress(royaltyParams.destination)
                .storeCoins(toNano(royalty_fee))
                .endCell();

            const body = beginCell()
                .storeUint(2, 8)
                .storeCoins(toNano(price))
                .storeRef(fees)
                .endCell();

            const nftContract = client.open(NftItem.fromAddress(nft_addr));

            await nftContract.send(
                sender,
                { value: toNano(0.15) },
                {
                    $$type: 'Transfer',
                    query_id: 0n,
                    custom_payload: null,
                    forward_amount: 1n,
                    forward_payload: body,
                    new_owner: Address.parse(env.MARKETPLACE_ADDR),
                    response_destination: Address.parse(wallet),
                }
            );
        } catch (e: any) {
            throw new Error(e);
        }
    }

    return {
        contract,
        methods: {
            getId,
            startAuctionSale,
            startFixedSale,
        },
    };
}
