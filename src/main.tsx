import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  metamaskWallet,
  rainbowWallet,
  coinbaseWallet,
  walletConnect,
  trustWallet,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import { BinanceTestnet } from "@thirdweb-dev/chains";
import settings from "./utils/settings.ts";
import AppProvider from "./entry/context/AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        rainbowWallet(),
        trustWallet(),
      ]}
      activeChain={BinanceTestnet}
      supportedChains={[BinanceTestnet]}
      autoConnect={true}
      theme="dark"
      clientId={settings.THIRDWEB_CLIENT_ID}
    >
      <AppProvider>
        <App />
      </AppProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
