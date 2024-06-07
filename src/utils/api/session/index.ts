import toast from '../../toast';
import ApiClient from '../api.client';

export default class SessionSdk {
    constructor(private client: ApiClient) {}

    async getSessions() {
        const { data } = await this.client.getInstance().get('/session');
        return (data?.data as Session) ?? [];
    }

    async getCurrentSession() {
        const { data } = await this.client.getInstance().get('/session/current');
        return data?.data as Session | undefined;
    }

    async deleteCurrentSession() {
        const { error, data } = await this.client.getInstance().delete('/session/current');

        if (error) {
            toast({
                type: 'error',
                message: data.error || 'Could not terminate sessions',
            });

            return false;
        }

        const { acknowledged, modifiedCount } = data.data;
        if (!acknowledged || modifiedCount == 0) {
            toast({
                type: 'error',
                message: 'Could not complete request',
            });

            return false;
        }

        return true;
    }

    async deleteSession(session: string) {
        const { error, data } = await this.client.getInstance().delete(`/session/${session}`);

        if (error) {
            toast({
                type: 'error',
                message: data.error || 'Could not terminate sessions',
            });

            return false;
        }

        const { acknowledged, modifiedCount } = data.data;
        if (!acknowledged || modifiedCount == 0) {
            toast({
                type: 'error',
                message: 'Could not complete request',
            });

            return false;
        }

        return true;
    }

    async clearSessions() {
        const { error, data } = await this.client.getInstance().delete('/session');

        if (error) {
            toast({
                type: 'error',
                message: data.error || 'Could not clear all sessions',
            });

            return false;
        }

        const { acknowledged, modifiedCount } = data.data;
        if (!acknowledged || modifiedCount == 0) {
            toast({
                type: 'error',
                message: 'Could not complete request',
            });

            return false;
        }

        return true;
    }
}
