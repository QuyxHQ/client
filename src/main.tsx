import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  metamaskWallet,
  rainbowWallet,
  coinbaseWallet,
  walletConnect,
  trustWallet,
  zerionWallet,
  cryptoDefiWallet,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import { Binance, BinanceTestnet } from "@thirdweb-dev/chains";
import settings from "./utils/settings.ts";
import AppProvider from "./entry/context/AppProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        rainbowWallet(),
        trustWallet(),
        zerionWallet(),
        cryptoDefiWallet(),
      ]}
      activeChain={Binance}
      supportedChains={[Binance, BinanceTestnet]}
      autoConnect={true}
      theme="dark"
      clientId={settings.THIRDWEB_CLIENT_ID}
    >
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AppProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
