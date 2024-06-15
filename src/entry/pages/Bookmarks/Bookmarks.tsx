import { useQuery } from '@tanstack/react-query';
import useApi from '../../hooks/useApi';
import { Card, CardLoader, EmptyIcon } from '../..';

const Bookmarks = () => {
    const { isPending, data } = useQuery({
        queryKey: ['bookmarks'],
        queryFn: async function () {
            const { bookmark } = await useApi();
            return await bookmark.getBookmarks();
        },
    });

    return (
        <main className="bookmarks">
            <div className="bg" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="py-5 px-1">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 mb-4">
                                        <div className="top">
                                            <h1>Bookmarks</h1>
                                            <p>Your bookmarked nfts</p>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        {isPending || !data ? (
                                            <div className="col-12">
                                                <div className="row g-3">
                                                    <CardLoader
                                                        size={12}
                                                        col="col-6 col-lg-4 col-xl-3"
                                                    />
                                                </div>
                                            </div>
                                        ) : data.length == 0 ? (
                                            <div style={{ padding: '0rem 0' }} className="mb-5">
                                                <div
                                                    style={{ gap: '1.5rem', minHeight: '40dvh' }}
                                                    className="d-flex flex-column align-items-center justify-content-center px-3"
                                                >
                                                    <EmptyIcon width={110} height={110} />
                                                    <p
                                                        style={{
                                                            opacity: 0.6,
                                                            fontSize: '0.95rem',
                                                            fontWeight: 300,
                                                            textAlign: 'center',
                                                            lineHeight: '195%',
                                                        }}
                                                    >
                                                        Oops, nothing here yet, try checking <br />
                                                        back later
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="row g-3">
                                                {data.map((item, i) => (
                                                    <div
                                                        className="col-6 col-lg-4 col-xl-3"
                                                        key={`item-${i}`}
                                                    >
                                                        <Card
                                                            nft={item.nft}
                                                            user={item.owner}
                                                            isBookmarked={item.isBookmarked}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Bookmarks;
