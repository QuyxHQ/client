import { useQuery } from '@tanstack/react-query';
import useApi from '../../../hooks/useApi';
import { Card, CardLoader, EmptyIcon } from '../../..';

const Nfts = ({ address, user }: { address: string; user: User }) => {
    const { isPending, data } = useQuery({
        queryKey: [`nfts-for-${address}`],
        queryFn: async function () {
            const { user } = await useApi();
            return await user.getUserNfts(address);
        },
    });

    return (
        <div className="nfts d-flex justify-content-center my-5 my-lg-0 py-lg-4 ps-lg-4">
            {isPending || !data ? (
                <div className="col-12">
                    <div className="row g-3">
                        <CardLoader col="col-6 col-xl-4" />
                    </div>
                </div>
            ) : data.length == 0 ? (
                <div
                    style={{ gap: '1.5rem' }}
                    className="d-flex flex-column align-items-center justify-content-center"
                >
                    <EmptyIcon width={110} height={110} />
                    <p
                        style={{
                            opacity: 0.6,
                            fontSize: '0.95rem',
                            fontWeight: 300,
                            textAlign: 'center',
                            lineHeight: '180%',
                        }}
                    >
                        Username/<small>s</small> owned by user will <br /> appear here
                    </p>
                </div>
            ) : (
                <div className="col-12">
                    <div className="row g-3">
                        {data.map((item, i) => (
                            <div className="col-6 col-xl-4" key={`item-${i}`}>
                                <Card nft={item.nft} user={user} isBookmarked={item.isBookmarked} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nfts;
