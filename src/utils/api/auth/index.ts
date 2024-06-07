import { AsyncLocalStorage } from '../../async.storage';
import env from '../../env';
import toast from '../../toast';
import ApiClient from '../api.client';

export default class AuthSdk {
    private storage: AsyncLocalStorage;

    constructor(private client: ApiClient) {
        this.storage = env.storage;
    }

    async getProofPayload() {
        const { error, data } = await this.client.getInstanceWithoutAuth().get('/auth/token');

        if (error) {
            toast({
                type: 'error',
                message: data.error || 'Unable to generate token',
            });

            return;
        }

        return data.data.token as string;
    }

    async authenticateWallet(walletInfo: any) {
        const { error, data } = await this.client
            .getInstanceWithoutAuth()
            .post('/auth', { walletInfo });

        if (error) {
            toast({
                type: 'error',
                message: data.error || 'Unable to complete authentication',
            });

            return;
        }

        const { accessToken, refreshToken } = data.data;

        await Promise.all([
            this.storage.setItem('access_token', accessToken),
            this.storage.setItem('refresh_token', refreshToken),
        ]);

        return { accessToken, refreshToken };
    }
}
