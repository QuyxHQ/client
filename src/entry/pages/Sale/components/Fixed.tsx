import { useState } from 'react';
import useForm from '../../../hooks/useForm';
import { TonIcon } from '../../..';
import { useQuery } from '@tanstack/react-query';
import { getNFTAuctionInfo, sleep, getSaleInfo, getFixedSaleInfo } from '../../../../utils/helper';
import useApi from '../../../hooks/useApi';
import { useNavigate } from 'react-router-dom';
import { Address } from 'ton-core';
import useMarketplace from '../../../hooks/useMarketplace';
import toast from '../../../../utils/toast';

const Fixed = ({ address }: { address: string }) => {
    const { onChange, onSubmit, values } = useForm(staartSale, { price: '' });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { contract, methods } = useMarketplace();

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

    async function staartSale() {
        if (isLoading || !contract || !values.price) return;

        setIsLoading(true);

        try {
            console.log(address);
            await methods.startFixedSale(Address.parse(address), Number(values.price));

            let is_verified = false;
            let count = 10;

            while (!is_verified && count > 0) {
                const data = await getFixedSaleInfo(address);

                if (data) {
                    is_verified = true;
                } else {
                    count--;
                    await sleep(2.5);
                }
            }

            if (!is_verified) throw new Error('Could not verify transaction');

            toast({ type: 'success', message: `nft put on sale successfully!` });
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
                                <h1 className="page-title">Begin a Fixed Sale</h1>
                            </div>

                            <form
                                className="col-12 col-sm-9 col-lg-7 col-xl-5"
                                action="#"
                                onSubmit={onSubmit}
                            >
                                <div className="form-group">
                                    <label htmlFor="price">Enter price</label>
                                    <div className="copy position-relative">
                                        <input
                                            type="number"
                                            autoComplete="off"
                                            id="price"
                                            name="price"
                                            placeholder="e.g. 10 TON"
                                            value={values.price}
                                            onChange={onChange}
                                            required
                                        />

                                        <div className="copy-box position-absolute d-flex align-items-center justify-content-center">
                                            <TonIcon />
                                        </div>
                                    </div>
                                </div>

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
                                                <p>{nft.item.collection?.name}</p>
                                            </div>
                                        </>
                                    )}
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

export default Fixed;
