import { Nfts, UserInfo } from './components';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { NotFound } from '..';

const User = () => {
    const { username } = useParams();

    const { isPending, data: user } = useQuery({
        queryKey: [`${username}-data`],
        queryFn: async function () {
            const { user } = await useApi();
            return await user.getUser(username!);
        },
    });

    return (
        <>
            <div className="bg" />

            {isPending ? (
                <div
                    style={{ padding: '1rem', gap: '1.5rem', height: '60dvh' }}
                    className="d-flex flex-column align-items-center justify-content-center"
                >
                    <span className="loader-span-sm"></span>
                    <p style={{ opacity: 0.5 }}>Loading...</p>
                </div>
            ) : !user ? (
                <NotFound />
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="px-2 user-page py-4">
                                <div className="row align-items-center g-4 g-md-5">
                                    <div className="col-12 col-lg-4">
                                        <UserInfo user={user} />
                                    </div>

                                    <div className="col-12 col-lg-8">
                                        <Nfts address={user.address} />
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

export default User;
