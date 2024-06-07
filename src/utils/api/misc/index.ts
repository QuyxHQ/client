import toast from '../../toast';
import ApiClient from '../api.client';

export default class MiscSdk {
    constructor(private client: ApiClient) {}

    async getNfts(page = 1, limit = 30) {
        const { error, data } = await this.client
            .getInstanceWithoutAuth()
            .get(`/misc/nfts?page=${page}&limit=${limit}`);

        if (error) return undefined;
        return data?.data as NftItem[];
    }

    async getNft(address: string) {
        const { error, data } = await this.client
            .getInstanceWithoutAuth()
            .get(`/misc/nft/${address}`);

        if (error) return undefined;
        return data?.data as Nft;
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

        return (data?.data.url as string) ?? undefined;
    }
}
