import { EmptyIcon, VerifiedIcon, AnchorLink } from '../../..';
import { getAvatar } from '../../../../utils/helper';
import useModal from '../../../hooks/useModal';

const SearchResults = ({ isLoading, users }: { isLoading: boolean; users: User[] }) => {
    const { closeModal } = useModal();

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
                                    src={getAvatar(user.pfp || null, user.username)}
                                    alt={user.username}
                                />
                                <p>
                                    <span>{user.username}</span>
                                    {user.hasBlueTick ? <VerifiedIcon /> : null}
                                </p>
                            </div>

                            <AnchorLink to={`/user/${user.username}`} handleClick={closeModal}>
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

export default SearchResults;
