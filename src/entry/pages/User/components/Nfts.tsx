import useApi from '../../../hooks/useApi';
import { AnchorLink, Card, CardLoader, EmptyIcon } from '../../..';
import useApp from '../../../hooks/useApp';
import useModal from '../../../hooks/useModal';
import { Address } from 'ton-core';
import useCustomQuery from '../../../hooks/useCustomQuery';

const NftsModal = ({ pendingNFTs }: { pendingNFTs: PendingUsernameResp[] }) => {
    const { closeModal } = useModal();

    const data = pendingNFTs.map((item) => {
        return { username: item.nft.metadata.name, address: item.address };
    });

    return (
        <div className="pending-modal">
            <h3>Pending Claim</h3>

            <ol>
                {data.map((item, i) => (
                    <li key={`pending-${i}`}>
                        <span>
                            {item.username.startsWith('@')
                                ? item.username.substr(1, item.username.length)
                                : item.username}
                        </span>

                        <AnchorLink
                            to={`/nft/${Address.parse(item.address)}`}
                            handleClick={closeModal}
                        >
                            <span>Go</span>
                            <i className="h h-external-link" />
                        </AnchorLink>
                    </li>
                ))}
            </ol>
        </div>
    );
};

const Nfts = ({ user, pendingNFTs }: { user: User; pendingNFTs?: PendingUsernameResp[] }) => {
    const { user: whoami } = useApp();
    const { openModal, setModalBody } = useModal();

    function open() {
        if (!pendingNFTs) return;

        setModalBody(<NftsModal pendingNFTs={pendingNFTs} />);
        openModal();
    }

    const { data, ref, isFetchingNextPage, status } = useCustomQuery({
        key: `nfts-for-${user.address}`,
        fn: async function ({ pageParam }) {
            const { user: sdk } = await useApi();
            return await sdk.getUserNfts(user.address, pageParam);
        },
    });

    const content = data?.pages.map(function (items) {
        return items.map((item, i) => (
            <div
                ref={items.length == i + 1 ? ref : undefined}
                className="col-6 col-xl-4"
                key={`item-${i}`}
            >
                <Card nft={item.nft} user={user} isBookmarked={item.isBookmarked} />
            </div>
        ));
    });

    return (
        <div className="nfts  my-5 my-lg-0 py-lg-4 ps-lg-4">
            {status == 'pending' ? (
                <div className="col-12">
                    <div className="row g-3">
                        <CardLoader col="col-6 col-xl-4" />
                    </div>
                </div>
            ) : (
                <>
                    {pendingNFTs ? (
                        <div className="pending-nft-div flex-column flex-md-row align-items-start align-items-md-center p-4 p-md-3">
                            <h3 className="ps-md-3">
                                {`${
                                    whoami?._id == user._id ? 'You have' : 'This user has'
                                } ${pendingNFTs.length.toLocaleString()} unassigned username/s`}
                            </h3>

                            <button onClick={open}>
                                <span>View</span>
                                <i className="h h-external-link" />
                            </button>
                        </div>
                    ) : null}

                    {!content || content[0].length == 0 ? (
                        <div
                            style={{ gap: '1.5rem', height: '55dvh' }}
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
                                {content}

                                {isFetchingNextPage ? (
                                    <div className="col-12">
                                        <div className="d-flex align-items-center justify-content-center pt-4 pb-0">
                                            <span
                                                className="loader-span-sm"
                                                style={{
                                                    width: '25px',
                                                    height: '25px',
                                                }}
                                            />
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Nfts;
