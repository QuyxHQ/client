import { useQuery } from '@tanstack/react-query';
import useApi from '../../../hooks/useApi';
import { AnchorLink, Card, CardLoader, EmptyIcon } from '../../..';
import useApp from '../../../hooks/useApp';
import useModal from '../../../hooks/useModal';
import { Address } from 'ton-core';

const NftsModal = ({ pendingNFTs }: { pendingNFTs: PendingUsernameResp[] }) => {
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

                        <AnchorLink to={`/nft/${Address.parse(item.address)}`}>
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

    const { isPending, data } = useQuery({
        queryKey: [`nfts-for-${user.address}`],
        queryFn: async function () {
            const { user: sdk } = await useApi();
            return await sdk.getUserNfts(user.address);
        },
    });

    return (
        <div className="nfts  my-5 my-lg-0 py-lg-4 ps-lg-4">
            {isPending || !data ? (
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

                    {data.length == 0 ? (
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
                                {data.map((item, i) => (
                                    <div className="col-6 col-xl-4" key={`item-${i}`}>
                                        <Card
                                            nft={item.nft}
                                            user={user}
                                            isBookmarked={item.isBookmarked}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Nfts;
