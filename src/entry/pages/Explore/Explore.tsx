import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';

const Explore = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [nfts, setNfts] = useState<NftItem[]>([]);

    useEffect(() => {
        (async function () {
            const { misc } = await useApi();

            const resp = await misc.getNfts();
            setNfts(resp ?? []);
            setIsLoading(false);
        })();
    }, []);

    return (
        <>
            <div className="bg" />

            {isLoading ? (
                <div
                    style={{ padding: '1rem', gap: '1.5rem', height: '60dvh' }}
                    className="d-flex flex-column align-items-center justify-content-center"
                >
                    <span className="loader-span-sm"></span>
                    <p style={{ opacity: 0.5 }}>Loading...</p>
                </div>
            ) : nfts.length == 0 ? (
                'nothing found'
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="px-2 py-5">
                                <div className="col-12">
                                    <div className="row"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Explore;
