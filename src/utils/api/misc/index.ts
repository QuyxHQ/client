import toast from '../../toast';
import ApiClient from '../api.client';

export default class MiscSdk {
    constructor(private client: ApiClient) {}

    async getNfts(page = 1, limit = 30) {
        const { error, data } = await this.client
            .getInstance()
            .get(`/misc/nfts?page=${page}&limit=${limit}`);

        if (error) return [];
        return (data?.data as { nft: NftItem; user: User | null; isBookmarked: boolean }[]) ?? [];
    }

    async getNft(address: string) {
        const { error, data } = await this.client
            .getInstanceWithoutAuth()
            .get(`/misc/nft/${address}`);

        if (error) return undefined;
        return data as Nft;
    }

    async uploadImage(base64image: string) {
        const { error, data } = await this.client
            .getInstance()
            .post('/misc/upload', { image: base64image.split(',')[1] });

        if (error) {
            toast({
                type: 'error',
                message: data.error || 'Unable to upload image',
            });

            return;
        }

        return (data?.data.uri as string) ?? undefined;
    }

    async subscribe(email: string) {
        const { error } = await this.client.getInstance().post('/misc/subscribe', { email });

        if (error) {
            toast({
                type: 'error',
                message: 'Unable to subscribe to newsletter',
            });

            return false;
        }

        toast({
            type: 'success',
            message: 'Successfully subscribed to newsletter!',
        });

        return true;
    }

    async triggerPendingUsernameUpdate(address: string) {
        await this.client.getInstanceWithoutAuth().put(`/misc/update/${address}`);
    }
}
