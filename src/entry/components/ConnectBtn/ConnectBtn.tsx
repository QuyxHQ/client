import { THEME, useTonConnectModal, useTonConnectUI } from '@tonconnect/ui-react';
import { TonIcon } from '..';
import { useIsConnectionRestored } from '@tonconnect/ui-react';
import useTonConnect from '../../hooks/useTonConnect';
import useApp from '../../hooks/useApp';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';

const ConnectBtn = () => {
    const connectionRestored = useIsConnectionRestored();
    const { open } = useTonConnectModal();
    const { connected } = useTonConnect();
    const [tonConnectUI] = useTonConnectUI();
    const { isMounting, getUser, setIsAuthenticating, isAuthenticating, user: whoami } = useApp();
    const navigate = useNavigate();

    async function connect() {
        if (connected) await tonConnectUI.disconnect();
        open();
    }

    useEffect(() => {
        if (whoami) {
            if (whoami.tg_id == null) return navigate('/onboard/complete');
            if (whoami.is_active == false) return navigate('/onboard/paywall');
            return navigate('/');
        }
    }, [whoami]);

    useEffect(() => {
        tonConnectUI.uiOptions = {
            uiPreferences: {
                theme: THEME.DARK,
            },
        };

        tonConnectUI.setConnectRequestParameters({
            state: 'loading',
        });

        (async function () {
            const { auth } = await useApi();

            const token = await auth.getProofPayload();
            if (!token) {
                tonConnectUI.setConnectRequestParameters(null);
            } else {
                tonConnectUI.setConnectRequestParameters({
                    state: 'ready',
                    value: {
                        tonProof: token,
                    },
                });
            }
        })();

        tonConnectUI.onStatusChange(async (wallet) => {
            const { auth } = await useApi();

            if (
                wallet &&
                wallet.connectItems?.tonProof &&
                'proof' in wallet.connectItems.tonProof
            ) {
                setIsAuthenticating(true);

                const authTokens = await auth.authenticateWallet(wallet);
                if (!authTokens) return setIsAuthenticating(false);

                const { accessToken, refreshToken } = authTokens;

                await getUser({ access_token: accessToken, refresh_token: refreshToken });
                setIsAuthenticating(false);
            }
        });
    }, []);

    return (
        <button
            className="gradient-border"
            onClick={isAuthenticating || !connectionRestored || isMounting ? undefined : connect}
        >
            {isAuthenticating || !connectionRestored || isMounting ? (
                <div className="px-4">
                    <span className="loader-span-sm" />
                </div>
            ) : (
                <>
                    <TonIcon size={18} />
                    <span style={{ fontWeight: 500 }}>Connect</span>
                </>
            )}
        </button>
    );
};

export default ConnectBtn;
