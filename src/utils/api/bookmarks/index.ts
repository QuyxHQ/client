import toast from '../../toast';
import ApiClient from '../api.client';

export default class BookmarkSdk {
    constructor(private client: ApiClient) {}

    async getBookmarks(page = 1, limit = 30) {
        const { error, data } = await this.client
            .getInstance()
            .get(`/bookmark?page=${page}&limit=${limit}`);

        if (error) return undefined;
        return data?.data as Bookmark[];
    }

    async getNftBookmarkCount(address: string) {
        const { data } = await this.client.getInstance().get(`/bookmark/count/${address}`);
        return (data?.data.count as number) ?? 0;
    }

    async isNftBookmarked(address: string) {
        const { error } = await this.client.getInstance().get(`/bookmark/${address}`);
        return error as boolean;
    }

    private completeBookmark(data: any) {
        const { acknowledged, modifiedCount, deletedCount } = data;

        if (acknowledged && modifiedCount && modifiedCount > 0) {
            toast({
                type: 'success',
                message: 'NFT bookmarked',
            });

            return true;
        }

        if (acknowledged && deletedCount && deletedCount > 0) {
            toast({
                type: 'success',
                message: 'NFT removed from bookmarks',
            });

            return true;
        }

        return false;
    }

    async addToBookmark(address: string) {
        const { error, data } = await this.client.getInstance().put(`/bookmark/${address}`);
        if (error) {
            toast({
                type: 'error',
                message: data.error || 'Could not bookmark NFT',
            });

            return false;
        }

        if (this.completeBookmark(data.data)) return;

        toast({
            type: 'error',
            message: 'Could not complete request',
        });

        return false;
    }

    async removeBookmark(address: string) {
        const { error, data } = await this.client.getInstance().delete(`/bookmark/${address}`);
        if (error) {
            toast({
                type: 'error',
                message: data.error || 'Could not remove NFT from bookmarks',
            });

            return false;
        }

        if (this.completeBookmark(data.data)) return;

        toast({
            type: 'error',
            message: 'Could not complete request',
        });

        return false;
    }

    async clearBookmarks() {
        const { error, data } = await this.client.getInstance().delete('/bookmark');
        if (error) {
            toast({
                type: 'error',
                message: data.error || 'Could not clear bookmark',
            });

            return false;
        }

        const { acknowledged, deletedCount } = data.data;

        if (acknowledged && deletedCount > 0) {
            toast({
                type: 'success',
                message: 'Bookmarks cleared',
            });

            return true;
        }

        toast({
            type: 'error',
            message: 'Could not complete request',
        });

        return false;
    }
}
