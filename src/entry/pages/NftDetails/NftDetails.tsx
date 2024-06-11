import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { NotFound } from '..';
import useItem from '../../hooks/useItem';
import { Address } from 'ton-core';
import { useEffect, useState } from 'react';

const NameDetails = () => {
    const { address } = useParams() as { address: string };

    const { contract } = useItem(Address.parse(address));
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [metadata, setMetadata] = useState<any>();

    const { isPending, data: nft } = useQuery({
        queryKey: [address],
        queryFn: async function () {
            const { misc } = await useApi();
            return await misc.getNft(address);
        },
    });

    async function getMetadata() {
        if (!contract) return;
        setIsLoading(true);

        const data = await contract.getGetNftData();
        if (!data) return;

        const uri = data.content.beginParse().loadStringTail();
        const response = await fetch(uri);
        const metadata = await response.json();

        setIsLoading(false);
        setMetadata(metadata);
        // setMetadata({
        //     name: '@morifeoluwa',
        //     description:
        //         'A part of Quyx username - the starting point of your decentralized identity management',
        //     image: 'https://iili.io/JyLZR3v.png',
        //     buttons: [
        //         {
        //             label: 'Open in Quyx',
        //             uri: 'https://quyx.xyz',
        //         },
        //     ],
        //     attributes: [
        //         {
        //             trait_type: 'Length',
        //             value: 11,
        //         },
        //     ],
        // });
    }

    useEffect(() => {
        getMetadata();
    }, [contract]);

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
                                                src={nft.metadata.image || metadata.image}
                                                alt={nft.metadata.name || metadata.name}
                                                className="w-100"
                                            />
                                        </div>

                                        <div className="col-12 col-md-7">
                                            <h1>{nft.metadata.name || metadata.name}</h1>
                                            <p>
                                                {nft.metadata.description || metadata.description}
                                            </p>
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
