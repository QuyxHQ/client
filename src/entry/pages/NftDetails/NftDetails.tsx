//@ts-nocheck
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { NotFound } from '..';
import useItem from '../../hooks/useItem';
import { Address } from 'ton-core';
import { useEffect, useState } from 'react';

const NameDetails = () => {
    const { address } = useParams() as { address: string };
    const { state } = useLocation();

    let just_claimed = false;
    if (state) just_claimed = state.just_claimed;

    const { contract } = useItem(Address.parse(address));
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { isPending, data: nft } = useQuery({
        queryKey: [address],
        queryFn: async function () {
            const { misc } = await useApi();
            return await misc.getNft(address);
        },
    });

    return (
        <>
            <div className="bg" />

            {isPending || isLoading ? (
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
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12 col-md-5">
                                            <img
                                                src={nft.metadata.image}
                                                alt={nft.metadata.name}
                                                className="w-100"
                                            />
                                        </div>

                                        <div className="col-12 col-md-7">
                                            <h1>{nft.metadata.name}</h1>
                                            <p>{nft.metadata.description}</p>
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

export default NameDetails;
