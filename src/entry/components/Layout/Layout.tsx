import { CHAIN } from '@tonconnect/sdk';
import { DefaultNavbar, Footer } from '..';
import useTonConnect from '../../hooks/useTonConnect';
import env from '../../../utils/env';
import { useEffect, useState } from 'react';
import useModal from '../../hooks/useModal';
import { useTonConnectUI } from '@tonconnect/ui-react';
import useApi from '../../hooks/useApi';

type WrongChainComponentProps = {
    chain: CHAIN;
    expected: 'mainnet' | 'testnet';
};

const WrongChainComponent = ({ chain, expected }: WrongChainComponentProps) => {
    const [tonConnectUI] = useTonConnectUI();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function disconnect() {
        if (isLoading) return;

        setIsLoading(true);
        const { session } = await useApi();

        const resp = await session.deleteCurrentSession();
        if (resp) await tonConnectUI.disconnect();
        setIsLoading(false);
    }

    return (
        <div className="wrong-chain-modal py-5">
            <h3 className="mb-2">Bad network</h3>
            <p className="mb-4 pb-2">
                Expected {expected}, got {chain}
            </p>

            <button onClick={disconnect} disabled={isLoading}>
                {isLoading ? <span className="loader-span-sm" /> : 'Disconnect'}
            </button>
        </div>
    );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { network, connected } = useTonConnect();
    const { setModalBody, openModal, closeModal } = useModal();

    useEffect(() => {
        if (!connected) return closeModal();

        if (env.IS_TESTNET && network !== CHAIN.TESTNET) {
            setModalBody(<WrongChainComponent chain={network!} expected="testnet" />);
            openModal(false);

            return;
        }

        if (!env.IS_TESTNET && network !== CHAIN.MAINNET) {
            setModalBody(<WrongChainComponent chain={network!} expected="mainnet" />);
            openModal(false);

            return;
        }

        closeModal();
    }, [connected, network]);

    return (
        <>
            {connected && network && network == CHAIN.TESTNET ? (
                <div className="top-nav">
                    <p>
                        <i className="h h-alert-triangle" />
                        <span>
                            <strong>Heads up!</strong>
                            <span>You are currently on the testnet</span>
                        </span>
                    </p>
                </div>
            ) : null}

            <DefaultNavbar />

            {children}

            <Footer />
        </>
    );
};

export default Layout;
