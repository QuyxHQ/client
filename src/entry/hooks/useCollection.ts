import { Address, beginCell, toNano } from 'ton-core';
import env from '../../utils/env';
import useAsyncInitialize from './useAsyncInitialize';
import useTonClient from './useTonClient';
import useTonConnect from './useTonConnect';
import { NftCollection } from '../../contract/artefacts/tact_NftCollection';

export default function () {
    const { client } = useTonClient();
    const { wallet, sender } = useTonConnect();

    const contract = useAsyncInitialize(async () => {
        if (!client) return;

        const contract = NftCollection.fromAddress(Address.parse(env.CONTRACT_ADDR));
        return client.open(contract);
    }, [client]);

    async function getNftItemAddressFromIndex(index: bigint) {
        if (!contract) return;
        return await contract.getGetNftAddressByIndex(index);
    }

    async function getRoyaltyParams() {
        if (!contract) return;
        return await contract.getGetRoyaltyParams();
    }

    async function claimUsername(username: string, amount: string) {
        if (!contract || !wallet || !client) return;

        try {
            const balance = await client.getBalance(Address.parse(wallet));
            const value = toNano(amount);

            const domain = `${env.IS_TESTNET ? 'testnet.' : ''}api.quyx.xyz`;
            const content_uri = `https://${domain}/nft/metadata/${username}`;

            if (value > balance) throw new Error('Insufficient balance');
            await contract.send(
                sender,
                { value },
                {
                    $$type: 'ClaimUsername',
                    query_id: 0n,
                    domain: username,
                    content: beginCell().storeUint(1, 8).storeStringTail(content_uri).endCell(),
                }
            );
        } catch (e: any) {
            throw new Error(e);
        }
    }

    return {
        contract,
        methods: {
            getNftItemAddressFromIndex,
            getRoyaltyParams,
            claimUsername,
        },
    };
}
