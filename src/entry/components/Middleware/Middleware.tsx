import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Address } from 'ton-core';
import LoadingBar from 'react-top-loading-bar';
import { Layout, Modal } from '..';
import useTonConnect from '../../hooks/useTonConnect';
import useApp from '../../hooks/useApp';
import { useIsConnectionRestored, useTonConnectUI } from '@tonconnect/ui-react';
import { isMemberofRoute } from '../../../utils/helper';

const PROTECTED_ROUTES = ['/bookmarks', '/edit-profile', '/sale/*'];

const Middleware = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<any>(null);

    const { connected } = useTonConnect();
    const isConnectionRestored = useIsConnectionRestored();
    const { logout, isMounting, isAuthenticated, isAuthenticating, user } = useApp();
    const location = useLocation();
    const navigate = useNavigate();
    const [tonConnectUI] = useTonConnectUI();

    useEffect(() => {
        (async function () {
            if (!isMounting && isConnectionRestored) {
                if (!isAuthenticating) {
                    if ((user && !connected) || (connected && !user)) {
                        await Promise.all([logout(), tonConnectUI.disconnect()]);
                    }
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
    }, [
        connected,
        isMounting,
        isConnectionRestored,
        user,
        isAuthenticated,
        isAuthenticating,
        location,
    ]);

    useEffect(() => {
        ref.current.continuousStart();

        if (!isConnectionRestored && isMemberofRoute(location.pathname, PROTECTED_ROUTES)) {
            return ref.current.continuousStart();
        }

        if (!isMounting) return ref.current.complete();

        if (!isMounting && isConnectionRestored) ref.current.complete();
    }, [location, isMounting, isConnectionRestored]);

    return (
        <>
            <Modal />
            <LoadingBar color="#9327ff" ref={ref} height={2} shadow={true} />

            {isMounting ? null : !isConnectionRestored &&
              isMemberofRoute(location.pathname, PROTECTED_ROUTES) ? null : (
                <Layout children={children} />
            )}
        </>
    );
};

export default Middleware;
