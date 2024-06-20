import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Address } from 'ton-core';
import {
    getAuctionSaleInfo,
    getNFTAuctionInfo,
    getSaleInfo,
    sleep,
    truncateAddress,
} from '../../../../utils/helper';
import useApi from '../../../hooks/useApi';
import useForm from '../../../hooks/useForm';
import useMarketplace from '../../../hooks/useMarketplace';
import toast from '../../../../utils/toast';
import { TonIcon } from '../../..';

const Auction = ({ address }: { address: string }) => {
    const { onChange, onSubmit, values } = useForm(startAuction, {
        min_bid: '',
        end_date: '',
        max_bid: '',
        min_step: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { contract, methods } = useMarketplace();

    const [displayMaxBid, setDisplayMaxBid] = useState<boolean>(false);
    const [displayBidStep, setDisplayBidStep] = useState<boolean>(false);

    const { isPending, data: nft } = useQuery({
        queryKey: [address],
        queryFn: async function () {
            const { misc } = await useApi();

            const [data, auction_info] = await Promise.all([
                misc.getNft(address),
                getNFTAuctionInfo(address),
            ]);

            if (auction_info?.max_bid_address != null) {
                navigate(`/nft/${address}`, {
                    replace: true,
                });
            }

            if (data) {
                let sale_info;

                if ('sale' in data) {
                    sale_info = await getSaleInfo(data.sale?.address!);

                    if (sale_info?.sale || sale_info?.auction) {
                        navigate(`/nft/${address}`, {
                            replace: true,
                        });
                    }
                }

                return { item: data, sale_info, auction_info };
            }

            navigate(`/nft/${address}`, {
                replace: true,
            });

            return null;
        },
    });

    async function startAuction() {
        if (isLoading || !contract) return;
        const { min_bid, end_date, max_bid, min_step } = values;
        console.log(values);

        setIsLoading(true);

        try {
            await methods.startAuctionSale(
                Address.parse(address),
                Number(min_bid),
                new Date(end_date).getTime() / 1000,
                Number(min_step || 0),
                Number(max_bid || 0)
            );

            let is_verified = false;
            let count = 10;

            while (!is_verified && count > 0) {
                const data = await getAuctionSaleInfo(address);

                if (data) {
                    is_verified = true;
                } else {
                    count--;
                    await sleep(2.5);
                }
            }

            if (!is_verified) throw new Error('Could not verify transaction');

            toast({ type: 'success', message: `nft put on auction successfully!` });
            navigate(`/nft/${address}`);
        } catch (e: any) {
            toast({ type: 'error', message: e.message });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section className="mb-5">
            <div className="bg" />
            <div className="container-fluid container-xl">
                <div className="row">
                    <div className="col-12">
                        <div className="px-2">
                            <div className="page">
                                <h1 className="page-title">Begin auction</h1>
                            </div>

                            <form
                                className="col-12 col-sm-9 col-lg-7 col-xl-5"
                                action="#"
                                onSubmit={onSubmit}
                            >
                                <div className="fixed-sale-info">
                                    {isPending || !nft ? (
                                        <div className="p-4">
                                            <span
                                                className="loader-span-sm my-2"
                                                style={{ width: '20px', height: '20px' }}
                                            />
                                        </div>
                                    ) : (
                                        <>
                                            <img
                                                src={nft.item.metadata.image}
                                                alt={nft.item.metadata.name}
                                            />

                                            <div>
                                                <h3>{nft.item.metadata.name}</h3>
                                                <p>
                                                    {truncateAddress({
                                                        address: Address.parse(
                                                            nft.item.address
                                                        ).toString(),
                                                        prefixLength: 7,
                                                        suffixLength: 5,
                                                    })}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="min_bid">Enter min. bid</label>
                                    <div className="copy position-relative">
                                        <input
                                            type="number"
                                            autoComplete="off"
                                            id="min_bid"
                                            name="min_bid"
                                            placeholder="e.g. 10 TON"
                                            value={values.min_bid}
                                            onChange={onChange}
                                            required
                                        />

                                        <div className="copy-box position-absolute d-flex align-items-center justify-content-center">
                                            <TonIcon />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="end_date">Auction ends</label>
                                    <input
                                        type="datetime-local"
                                        autoComplete="off"
                                        id="end_date"
                                        name="end_date"
                                        value={values.end_date}
                                        onChange={onChange}
                                        required
                                    />
                                </div>

                                <div className={`form-group ${displayMaxBid ? null : 'mb-4'}`}>
                                    <label
                                        htmlFor="max_bid"
                                        className="d-flex align-items-center justify-content-between w-100"
                                    >
                                        <div>
                                            <h4>max. bid</h4>
                                            <p>
                                                If anyone bids this amount, the NFT will be
                                                transferred to the bidder, and the auction will
                                                close.
                                            </p>
                                        </div>

                                        <div className="d-flex">
                                            <div className="cl-toggle-switch">
                                                <label className="cl-switch">
                                                    <input
                                                        type="checkbox"
                                                        onChange={(e) =>
                                                            setDisplayMaxBid(e.target.checked)
                                                        }
                                                    />
                                                    <span />
                                                </label>
                                            </div>
                                        </div>
                                    </label>

                                    {displayMaxBid ? (
                                        <div className="copy position-relative">
                                            <input
                                                type="number"
                                                autoComplete="off"
                                                id="max_bid"
                                                name="max_bid"
                                                placeholder="Enter max. bid e.g. 10 TON"
                                                value={values.max_bid}
                                                onChange={onChange}
                                                required
                                            />

                                            <div className="copy-box position-absolute d-flex align-items-center justify-content-center">
                                                <TonIcon />
                                            </div>
                                        </div>
                                    ) : null}
                                </div>

                                <div className={`form-group ${displayBidStep ? null : 'mb-4'}`}>
                                    <label
                                        htmlFor="min_step"
                                        className="d-flex align-items-center justify-content-between w-100"
                                    >
                                        <div>
                                            <h4>min. step(%)</h4>
                                            <p>
                                                Each new bid must be higher than the previous one by
                                                this percentage.
                                            </p>
                                        </div>

                                        <div className="cl-toggle-switch">
                                            <label className="cl-switch">
                                                <input
                                                    type="checkbox"
                                                    onChange={(e) =>
                                                        setDisplayBidStep(e.target.checked)
                                                    }
                                                />
                                                <span />
                                            </label>
                                        </div>
                                    </label>

                                    {displayBidStep ? (
                                        <div className="copy position-relative">
                                            <input
                                                type="number"
                                                autoComplete="off"
                                                id="min_step"
                                                name="min_step"
                                                placeholder="Enter min. step e.g. 5%"
                                                value={values.min_step}
                                                onChange={onChange}
                                                required
                                            />

                                            <div className="copy-box position-absolute d-flex align-items-center justify-content-center">
                                                <i className="h h-percent" />
                                            </div>
                                        </div>
                                    ) : null}
                                </div>

                                <div className="form-group">
                                    <button
                                        className="gradient-border"
                                        disabled={isLoading}
                                        type="submit"
                                        style={{ fontWeight: 400 }}
                                    >
                                        {isLoading ? (
                                            <div className="px-3">
                                                <span className="loader-span-sm" />
                                            </div>
                                        ) : (
                                            <div className="px-2">Put on sale</div>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auction;
