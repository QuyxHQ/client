import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { NotFound } from '..';
import { Address } from 'ton-core';
import { getAvatar, getSaleInfo, sleep } from '../../../utils/helper';
import { AnchorLink, VerifiedIcon } from '../..';
import useApp from '../../hooks/useApp';
import useItem from '../../hooks/useItem';
import toast from '../../../utils/toast';
import RenderPendingClaim from './components/RenderPendingClaim';
import RenderAuction from './components/RenderAuction';
import RenderFixSale from './components/RenderFixSale';

const NftDetails = () => {
    const { address } = useParams() as { address: string };
    const { state } = useLocation();
    const { user: whoami } = useApp();
    const { contract } = useItem(Address.parse(address));

    let just_claimed = false;
    if (state) just_claimed = state.just_claimed;

    const { isPending, data: nft } = useQuery({
        queryKey: [address],
        queryFn: async function () {
            const { misc } = await useApi();

            let [data, auction_info] = await Promise.all([
                misc.getNft(address),
                contract?.getGetAuctionInfo(),
            ]);

            while (!data && just_claimed) {
                await sleep(2);
                data = await misc.getNft(address);
            }

            if (data) {
                let sale_info;

                if ('sale' in data) {
                    sale_info = await getSaleInfo(data.sale?.address!);
                }

                return { item: data, sale_info, auction_info };
            }

            return null;
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
            ) : !nft ? (
                <NotFound />
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="px-2 py-5 nft-page">
                                <div className="col-12 col-md-9 col-lg-12 mx-auto">
                                    <div className="row g-4 g-md-5">
                                        <div className="col-12 col-lg-5">
                                            <div className="main-img">
                                                <img
                                                    src={nft.item.metadata.image}
                                                    alt={nft.item.metadata.name}
                                                    className="w-100"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-7">
                                            <div className="py-4 nft-info-main">
                                                <AnchorLink
                                                    to={`/user/${nft.item.nft_owner?.username}`}
                                                    className="owner mb-4"
                                                >
                                                    <img
                                                        src={getAvatar(
                                                            nft.item.nft_owner?.pfp || null,
                                                            nft.item.nft_owner?.username || 'n/a'
                                                        )}
                                                        alt={nft.item.nft_owner?.username}
                                                    />

                                                    <div>
                                                        <p>
                                                            <span>
                                                                {nft.item.nft_owner?.username ||
                                                                    'Deleted user'}
                                                            </span>
                                                            {nft.item.nft_owner?.hasBlueTick ? (
                                                                <VerifiedIcon />
                                                            ) : null}
                                                        </p>

                                                        <span>Owner</span>
                                                    </div>
                                                </AnchorLink>

                                                <h1 className="pt-1">{nft.item.metadata.name}</h1>
                                                <p className="description mb-5">
                                                    {nft.item.metadata.description}
                                                </p>

                                                <div className="body">
                                                    {nft.auction_info &&
                                                    nft.auction_info.max_bid_address != null ? (
                                                        <RenderPendingClaim
                                                            auction_info={nft.auction_info}
                                                            address={Address.parse(address)}
                                                        />
                                                    ) : null}

                                                    {nft.sale_info && nft.sale_info.auction ? (
                                                        <RenderAuction
                                                            address={Address.parse(
                                                                nft.item.sale?.address!
                                                            )}
                                                            auction_data={nft.sale_info.auction}
                                                        />
                                                    ) : null}

                                                    {nft.sale_info && nft.sale_info.sale ? (
                                                        <RenderFixSale
                                                            address={Address.parse(
                                                                nft.item.sale?.address!
                                                            )}
                                                            sale_data={nft.sale_info.sale}
                                                        />
                                                    ) : null}

                                                    {nft.item.owner?.address == whoami?.address ? (
                                                        <>
                                                            <button>Transfer</button>

                                                            {!nft.sale_info?.auction &&
                                                            !nft.sale_info?.sale ? (
                                                                <button className="bg-dark text-white">
                                                                    Put for sale
                                                                </button>
                                                            ) : null}
                                                        </>
                                                    ) : null}

                                                    {!nft.sale_info &&
                                                    nft.item.owner?.address != whoami?.address &&
                                                    nft.auction_info &&
                                                    !nft.auction_info.max_bid_address ? (
                                                        <button
                                                            onClick={() =>
                                                                toast({
                                                                    type: 'info',
                                                                    message:
                                                                        'Oops! making offers is not available at the moment',
                                                                })
                                                            }
                                                        >
                                                            Make offer
                                                        </button>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
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

export default NftDetails;
