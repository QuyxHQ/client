import ApiClient from '../../utils/api/api.client';
import AuthSdk from '../../utils/api/auth';
import BookmarkSdk from '../../utils/api/bookmarks';
import MiscSdk from '../../utils/api/misc';
import SessionSdk from '../../utils/api/session';
import UserSdk from '../../utils/api/user';
import env from '../../utils/env';

export default async function (props?: { access_token: string; refresh_token: string }) {
    let client = new ApiClient();

    if (props) {
        client = new ApiClient({ ...props });
    } else {
        const storage = env.storage;

        const [access_token, refresh_token] = await Promise.all([
            await storage.getItem('access_token'),
            await storage.getItem('refresh_token'),
        ]);

        if (access_token && refresh_token) client = new ApiClient({ access_token, refresh_token });
    }

    const authSdk = new AuthSdk(client);
    const bookmarkSdk = new BookmarkSdk(client);
    const miscSdk = new MiscSdk(client);
    const sessionSdk = new SessionSdk(client);
    const userSdk = new UserSdk(client);

    return {
        auth: authSdk,
        bookmark: bookmarkSdk,
        misc: miscSdk,
        session: sessionSdk,
        user: userSdk,
    };
}
