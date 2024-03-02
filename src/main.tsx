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
import {
  Goerli,
  BaseGoerli,
  Binance,
  BinanceTestnet,
} from "@thirdweb-dev/chains";

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
      supportedChains={[Binance, BinanceTestnet, Goerli, BaseGoerli]}
      autoConnect={true}
      theme="dark"
      clientId={settings.THIRDWEB_CLIENT_ID}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
