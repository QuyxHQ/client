import useApi from '../../hooks/useApi';
import { AnchorLink, Card, CardLoader, EmptyIcon, VerifiedIcon } from '../..';
import useApp from '../../hooks/useApp';
import { useQuery } from '@tanstack/react-query';
import useForm from '../../hooks/useForm';
import useModal from '../../hooks/useModal';

const SearchResults = ({ isLoading, users }: { isLoading: boolean; users: User[] }) => {
    return (
        <div className="search-results">
            <h3>Search Result</h3>

            {isLoading ? (
                <div className="d-flex py-5 my-3 flex-column align-items-center justify-content-center">
                    <span className="loader-span-sm"></span>
                </div>
            ) : users.length == 0 ? (
                <div>
                    <div
                        style={{ gap: '1.2rem' }}
                        className="d-flex flex-column align-items-center justify-content-center py-4 my-2"
                    >
                        <EmptyIcon width={90} height={90} />
                        <p
                            style={{
                                opacity: 0.6,
                                fontSize: '0.85rem',
                                fontWeight: 300,
                                textAlign: 'center',
                                lineHeight: '180%',
                            }}
                        >
                            Oops! no user found
                        </p>
                    </div>
                </div>
            ) : (
                <div className="result-list">
                    {users.map((user) => (
                        <div key={user._id} className="single-res">
                            <div>
                                <img
                                    src={user.pfp ? user.pfp : '/images/default-user.png'}
                                    alt={user.username}
                                />
                                <p>
                                    <span>{user.username}</span>
                                    {!user.hasBlueTick ? <VerifiedIcon /> : null}
                                </p>
                            </div>

                            <AnchorLink to={`/user/${user.username}`}>
                                <button>
                                    <span>Visit</span>
                                    <i className="h h-external-link" />
                                </button>
                            </AnchorLink>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const Explore = () => {
    const { actions } = useApp();
    const { openModal, setModalBody } = useModal();
    const { onChange, onSubmit, values } = useForm(search, { q: '' });

    const { isPending, data } = useQuery({
        queryKey: ['explore'],
        queryFn: async function () {
            const { misc } = await useApi();
            return await misc.getNfts();
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
                                            <p>Get to see what happens in Quyx in realtime!</p>
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
                                <div className="row g-4">
                                    <div className="col-12 col-lg-4">
                                        <div className="events">
                                            {actions.map((action, i) => (
                                                <div key={`action-${i}`}>
                                                    {JSON.stringify(action)}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-8">
                                        {isPending || !data ? (
                                            <div className="col-12">
                                                <div className="row g-3">
                                                    <CardLoader col="col-6 col-xl-4" />
                                                </div>
                                            </div>
                                        ) : data.length == 0 ? (
                                            <div style={{ padding: '0rem 0' }}>
                                                <div
                                                    style={{ gap: '1.5rem', minHeight: '80dvh' }}
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
                                                        className="col-6 col-xl-4"
                                                        key={`item-${i}`}
                                                    >
                                                        <Card
                                                            nft={item.nft}
                                                            user={item.user}
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
        </>
    );
};

export default Explore;
