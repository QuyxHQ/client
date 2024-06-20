import useApi from '../../hooks/useApi';
import { Card, CardLoader, EmptyIcon } from '../..';
import useForm from '../../hooks/useForm';
import useModal from '../../hooks/useModal';
import SearchResults from './components/SearchResults';
import useCustomQuery from '../../hooks/useCustomQuery';

const Explore = () => {
    const { openModal, setModalBody } = useModal();
    const { onChange, onSubmit, values } = useForm(search, { q: '' });

    const { data, ref, isFetchingNextPage, status } = useCustomQuery({
        key: 'explore',
        fn: async function ({ pageParam }) {
            const { misc } = await useApi();
            return await misc.getNfts(pageParam);
        },
    });

    async function search() {
        if (values.q.length < 4) return;

        setModalBody(<SearchResults isLoading={true} users={[]} />);
        openModal();

        const { user } = await useApi();
        const result = await user.searchForUser(values.q, 1, 10);

        setModalBody(<SearchResults isLoading={false} users={result.data} />);
    }

    const content = data?.pages.map(function (items) {
        return items.map((item, i) => (
            <div
                ref={items.length == i + 1 ? ref : undefined}
                className="col-6 col-lg-4 col-xl-3"
                key={`item-${i}`}
            >
                <Card nft={item.nft} user={item.user} isBookmarked={item.isBookmarked} />
            </div>
        ));
    });

    return (
        <>
            <div className="bg" />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="px-1 py-5">
                            <div className="explore-page px-1">
                                <div className="col-12 mb-5">
                                    <div className="row align-items-center g-3">
                                        <div className="col-12 col-md-5 col-lg-7 mb-4 mb-md-0">
                                            <h1>Explore</h1>
                                            <p>Get to see all claimed usernames!</p>
                                        </div>

                                        <div className="col-12 col-md-7 col-lg-5">
                                            <form className="form" onSubmit={onSubmit}>
                                                <i className="h h-lens" />
                                                <input
                                                    autoComplete="off"
                                                    type="text"
                                                    placeholder="Search users"
                                                    name="q"
                                                    id="q"
                                                    onChange={onChange}
                                                    value={values.q}
                                                />

                                                <button type="submit" className="position-absolute">
                                                    <i className="h h-corner-up-right" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                {status === 'pending' ? (
                                    <div className="col-12">
                                        <div className="row g-3">
                                            <CardLoader size={12} col="col-6 col-lg-4 col-xl-3" />
                                        </div>
                                    </div>
                                ) : !content || content[0].length == 0 ? (
                                    <div className="mb-4">
                                        <div
                                            style={{ gap: '1.5rem', minHeight: '40vh' }}
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
                                        {content}

                                        {isFetchingNextPage ? (
                                            <div className="col-12">
                                                <div className="d-flex align-items-center justify-content-center pt-4 pb-0">
                                                    <span
                                                        className="loader-span-sm"
                                                        style={{ width: '25px', height: '25px' }}
                                                    />
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Explore;
