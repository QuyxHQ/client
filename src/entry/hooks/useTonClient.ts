import { TonClient } from 'ton';
import useAsyncInitialize from './useAsyncInitialize';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import env from '../../utils/env';

function useTonClient() {
    return {
        client: useAsyncInitialize(async () => {
            return new TonClient({
                endpoint: await getHttpEndpoint({
                    network: env.IS_TESTNET ? 'testnet' : 'mainnet',
                }),
            });
        }, []),
    };
}

export default useTonClient;
