import { Nfts, UserInfo } from './components';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { NotFound } from '..';

const User = () => {
    const { username } = useParams();

    const { isPending, data } = useQuery({
        queryKey: [`${username}-data`],
        queryFn: async function () {
            const { user } = await useApi();
            const u = await user.getUser(username!);

            if (u) {
                let pendingNFTs;

                if (u.pending_usernames && u.pending_usernames.length > 0) {
                    pendingNFTs = await user.getUserPendingUsernames(u.username);
                }

                return { user: u, pendingNFTs };
            }

            return null;
        },
    });

    return (
        <>
            <div className="bg" />

            {isPending ? (
                <Loading />
            ) : !data ? (
                <NotFound />
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="px-1 user-page py-4">
                                <div className="row g-4 g-md-5">
                                    <div className="col-12 col-lg-4">
                                        <UserInfo user={data.user} />
                                    </div>

                                    <div className="col-12 col-lg-8">
                                        <Nfts user={data.user} pendingNFTs={data.pendingNFTs} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const Loading = () => {
    return (
        <div
            style={{ padding: '1rem', gap: '1.5rem', height: '60dvh' }}
            className="d-flex flex-column align-items-center justify-content-center"
        >
            <span className="loader-span-sm"></span>
            <p style={{ opacity: 0.5 }}>Loading...</p>
        </div>
    );
};

export default User;
