import toast from '../../toast';
import ApiClient from '../api.client';

export default class UserSdk {
    constructor(private client: ApiClient) {}

    async updateInformation(username: string, socials: User['socials']) {
        const { error, data } = await this.client.getInstance().put('/user', {
            username,
            socials,
        });

        if (error) {
            toast({
                type: 'error',
                message: data.error || 'Could not update information',
            });

            return;
        }

        toast({
            type: 'success',
            message: 'Information updated successfully!',
        });

        return;
    }

    async whoami() {
        const { data } = await this.client.getInstance().get('/user/whoami');
        return data?.data as User | undefined;
    }

    async getUserNfts(page = 1, limit = 20) {
        const { data } = await this.client
            .getInstance()
            .get(`/user/nfts?page=${page}&limit=${limit}`);

        return (data?.data as NftItem[]) ?? [];
    }

    async getUser(param: string) {
        const { data } = await this.client.getInstance().get(`/user/${param}`);
        return data?.data as User | undefined;
    }

    async searchForUser(q: string, page = 1, limit = 20) {
        const { data } = await this.client
            .getInstance()
            .get(`/user/search?q=${q}page=${page}&limit=${limit}`);

        return {
            total: (data?.total as number) ?? 0,
            data: (data?.data as User[]) ?? [],
        };
    }
}
