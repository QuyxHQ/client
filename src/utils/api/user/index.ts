import toast from '../../toast';
import ApiClient from '../api.client';

export default class UserSdk {
    constructor(private client: ApiClient) {}

    async updateInformation(username: string, bio: string, pfp: string, socials: User['socials']) {
        const { error, data } = await this.client.getInstance().put('/user', {
            username,
            bio,
            pfp,
            socials,
        });

        if (error) {
            toast({
                type: 'error',
                message: data.error || 'Could not update information',
            });

            return false;
        }

        toast({
            type: 'success',
            message: 'Information updated successfully!',
        });

        return true;
    }

    async whoami() {
        const { data } = await this.client.getInstance().get('/user/whoami');
        return data?.data as User | undefined;
    }

    async getUserNfts(address: string, page = 1, limit = 20) {
        const { data } = await this.client
            .getInstance()
            .get(`/user/nfts/${address}?page=${page}&limit=${limit}`);

        return (data?.data as { nft: NftItem; user: User | null; isBookmarked: boolean }[]) ?? [];
    }

    async getUser(param: string) {
        const { data } = await this.client.getInstance().get(`/user/${param}`);
        return data?.data as User | undefined;
    }

    async searchForUser(q: string, page = 1, limit = 20) {
        const { data } = await this.client
            .getInstance()
            .get(`/user/search?q=${q}&page=${page}&limit=${limit}`);

        return {
            total: (data?.total as number) ?? 0,
            data: (data?.data as User[]) ?? [],
        };
    }

    async getUserPendingUsernames(username: string) {
        const { data } = await this.client.getInstance().get(`/user/nft/pending/${username}`);
        return (data.data as PendingUsernameResp[]) || [];
    }
}
