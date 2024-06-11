import { Address } from 'ton-core';
import useItem from '../../../hooks/useItem';
import { useEffect, useState } from 'react';
import { AuctionInfo, NftItemData } from '../../../../contract/artefacts/tact_NftItem';
import HasNotBeenClaimedContent from './HasNotBeenClaimedContent';
import HasBeenClaimedContent from './HasBeenClaimedContent';

type Props = {
    nft_addr: Address;
    username: string;
};

const ClaimUsernameModalContent = ({ nft_addr, username }: Props) => {
    const { contract, methods } = useItem(nft_addr);

    const [auctionInfo, setAuctionInfo] = useState<AuctionInfo | null>();
    const [nftData, setNftData] = useState<NftItemData | null>();

    useEffect(() => {
        (async function () {
            if (!contract) return;

            setAuctionInfo(undefined);

            try {
                const [auction_info, nft_data] = await Promise.all([
                    methods.getNftAuctionInfo(),
                    methods.getNftItemData(),
                ]);

                setAuctionInfo(auction_info);
                setNftData(nft_data);
            } catch (e: any) {
                console.error(e.message);
                setAuctionInfo(null);
                setNftData(null);
            }
        })();
    }, [nft_addr, contract]);

    return typeof auctionInfo == 'undefined' || typeof nftData == 'undefined' ? (
        <div className="d-flex align-items-center justify-content-center py-5">
            <span className="loader-span-sm" />
        </div>
    ) : auctionInfo == null || nftData == null ? (
        <HasNotBeenClaimedContent username={username} address={nft_addr.toString()} />
    ) : (
        <HasBeenClaimedContent
            address={nft_addr}
            username={username}
            auction_info={auctionInfo}
            nft_data={nftData}
        />
    );
};

export default ClaimUsernameModalContent;
