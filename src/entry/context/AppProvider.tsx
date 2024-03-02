import React, { useContext, useEffect, useState } from "react";
import AppContext from "./AppContext";
import { useAddress, useSigner, useConnectionStatus } from "@thirdweb-dev/react";
import { api } from "../../utils/class/quyx.class";

export const useAppStore = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.JSX.Element }) => {
  const address = useAddress();
  const signer = useSigner();
  const connectionStatus = useConnectionStatus();

  const [isMounting, setIsMounting] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>();
  const [userInfo, setUserInfo] = useState<QuyxUser>();

  useEffect(() => {
    if (connectionStatus == "connected") setIsWalletConnected(true);
    if (connectionStatus == "disconnected") setIsWalletConnected(false);
  }, [connectionStatus]);

  useEffect(() => {
    (async function () {
      setIsMounting(true);

      const accessToken = localStorage.getItem("quyx_user_access_token");
      const refreshToken = localStorage.getItem("quyx_user_refresh_token");

      if (accessToken && refreshToken) {
        const _userInfo = await api.current();
        setUserInfo(_userInfo);
        setIsLoggedIn(_userInfo ? true : false);
      }

      setIsMounting(false);
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isMounting,
        isLoggedIn,
        userInfo,
        isWalletConnected,
        address,
        signer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
