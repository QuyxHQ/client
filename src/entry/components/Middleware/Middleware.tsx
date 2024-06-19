import { useEffect } from 'react';
import { Layout, Modal } from '..';
import useTonConnect from '../../hooks/useTonConnect';
import useApp from '../../hooks/useApp';
import { useIsConnectionRestored, useTonConnectUI } from '@tonconnect/ui-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isMemberofRoute } from '../../../utils/helper';
import { Address } from 'ton-core';

const PROTECTED_ROUTES = ['/bookmarks', '/edit-profile', '/sale/*'];

const Middleware = ({ children }: { children: React.ReactNode }) => {
    const { connected } = useTonConnect();
    const isConnectionRestored = useIsConnectionRestored();
    const { logout, isMounting, isAuthenticated, user } = useApp();
    const location = useLocation();
    const navigate = useNavigate();
    const [tonConnectUI] = useTonConnectUI();

    useEffect(() => {
        (async function () {
            if (!isMounting && isConnectionRestored) {
                if ((user && !connected) || (connected && !user)) {
                    await Promise.all([logout(), tonConnectUI.disconnect()]);
                }

                if (
                    (!isAuthenticated || !connected) &&
                    isMemberofRoute(location.pathname, PROTECTED_ROUTES)
                ) {
                    return navigate('/unauthorized', { replace: true });
                }

                if (user && isAuthenticated && connected && location.pathname == '/unauthorized') {
                    return navigate(`/user/${Address.parse(user.address).toString()}`, {
                        replace: true,
                    });
                }
            }
        })();
    }, [connected, isMounting, isConnectionRestored, user, isAuthenticated, location]);

    return (
        <>
            <Modal />
            {isMounting ? null : !isConnectionRestored &&
              isMemberofRoute(location.pathname, PROTECTED_ROUTES) ? null : (
                <Layout children={children} />
            )}
        </>
    );
};

export default Middleware;
