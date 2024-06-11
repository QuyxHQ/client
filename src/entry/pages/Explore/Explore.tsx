import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';

const Explore = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [nft, setNfts] = useState<NftItem[]>([]);

    useEffect(() => {
        (async function () {
            const { misc } = await useApi();

            const resp = await misc.getNfts();
            setNfts(resp ?? []);
            setIsLoading(false);
        })();
    }, []);

    return <>{isLoading ? 'loading...' : JSON.stringify(nft)}</>;
};

export default Explore;
