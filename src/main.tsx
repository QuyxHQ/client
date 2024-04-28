import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ModalProvider from "./entry/context/ModalProvider.tsx";
import AppProvider from "./entry/context/AppProvider.tsx";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="http://172.20.10.3:5173/tonconnect-manifest.json">
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
