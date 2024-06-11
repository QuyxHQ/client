import { useEffect, useState } from 'react';
import { Address } from 'ton-core';
import useCollection from '../../../hooks/useCollection';
import ClaimUsernameModalContent from './ClaimUsernameModalContent';

const ClaimUsernameModal = ({ username }: { username: string }) => {
    const [address, setAddress] = useState<Address>();
    const { contract, methods } = useCollection();

    useEffect(() => {
        (async function () {
            if (!contract) return;

            const index = await contract.getGetIndex(username);
            const addr = await methods.getNftItemAddressFromIndex(index);
            if (addr) setAddress(addr);
        })();
    }, [username, contract]);

    return (
        <div className="p-4">
            {!address ? (
                <div className="d-flex align-items-center justify-content-center py-5">
                    <span className="loader-span-sm" />
                </div>
            ) : (
                <ClaimUsernameModalContent nft_addr={address} username={username} />
            )}
        </div>
    );
};

export default ClaimUsernameModal;
