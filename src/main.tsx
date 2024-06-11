import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import ModalProvider from './entry/context/ModalProvider.tsx';
import AppProvider from './entry/context/AppProvider.tsx';
import env from './utils/env.ts';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const url = `https://${env.IS_TESTNET ? 'testnet.' : ''}quyx.xyz/manifest/tonconnect.json`;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TonConnectUIProvider manifestUrl={url}>
            <QueryClientProvider client={queryClient}>
                <ModalProvider>
                    <AppProvider>
                        <App />
                    </AppProvider>
                </ModalProvider>
            </QueryClientProvider>
        </TonConnectUIProvider>
    </React.StrictMode>
);
