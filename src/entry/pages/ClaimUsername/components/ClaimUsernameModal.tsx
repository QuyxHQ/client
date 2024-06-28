import { useEffect, useState } from 'react';
import { Address } from 'ton-core';
import useCollection from '../../../hooks/useCollection';
import { getNFTAuctionInfo, getNFTData } from '../../../../utils/helper';
import { AuctionInfo, NftItemData } from '../../../../contract/artefacts/tact_NftItem';
import HasNotBeenClaimedContent from './HasNotBeenClaimedContent';
import HasBeenClaimedContent from './HasBeenClaimedContent';
import useApi from '../../../hooks/useApi';

const ClaimUsernameModal = ({ username }: { username: string }) => {
    const { contract, methods } = useCollection();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [auctionInfo, setAuctionInfo] = useState<AuctionInfo>();
    const [nftData, setNftData] = useState<NftItemData>();
    const [address, setAddress] = useState<Address>();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        (async function () {
            if (!contract) return;
            setIsLoading(true);

            const index = await contract.getGetIndex(username);
            const addr = await methods.getNftItemAddressFromIndex(index);

            if (addr) {
                const [auction_info, nft_data] = await Promise.all([
                    getNFTAuctionInfo(addr.toString()),
                    getNFTData(addr.toString()!),
                ]);

                let owner;

                if (auction_info && auction_info.max_bid_address != null) {
                    owner = auction_info.max_bid_address;
                } else {
                    owner = nft_data?.owner;
                }

                const { user: sdk } = await useApi();
                if (owner) setUser(await sdk.getUser(owner.toString()));

                setAddress(addr);
                setAuctionInfo(auction_info);
                setNftData(nft_data);
            }

            setIsLoading(false);
        })();
    }, [username, contract]);

    return (
        <div className="p-4">
            {isLoading || !address ? (
                <div className="d-flex align-items-center justify-content-center py-5">
                    <span className="loader-span-sm" />
                </div>
            ) : auctionInfo && nftData ? (
                <HasBeenClaimedContent
                    address={address}
                    username={username}
                    auction_info={auctionInfo}
                    user={user}
                />
            ) : (
                <HasNotBeenClaimedContent username={username} address={address.toString()} />
            )}
        </div>
    );
};

export default ClaimUsernameModal;
