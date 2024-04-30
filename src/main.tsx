import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ModalProvider from "./entry/context/ModalProvider.tsx";
import AppProvider from "./entry/context/AppProvider.tsx";
import settings from "./utils/settings.ts";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl={`${settings.BASE_URL}/tonconnect-manifest.json`}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </AppProvider>
      </QueryClientProvider>
    </TonConnectUIProvider>
  </React.StrictMode>
);
