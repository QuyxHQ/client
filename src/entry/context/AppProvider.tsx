import React, { useContext, useEffect, useState } from "react";
import AppContext from "./AppContext";
import {
  useAddress,
  useSigner,
  useConnectionStatus,
  useChainId,
  useSwitchChain,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import { api } from "../../utils/class/api.class";
import Contract from "../../utils/class/contract.class";
import { ethers } from "ethers";

export const useAppStore = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.JSX.Element }) => {
  const address = useAddress();
  const signer = useSigner();
  const connectionStatus = useConnectionStatus();
  const chainId = useChainId();
  const switchChain = useSwitchChain();
  const isNetworkSupported = !useNetworkMismatch();

  const [isMounting, setIsMounting] = useState<boolean>(true);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>();
  const [userInfo, setUserInfo] = useState<QuyxUser>();
  const [modalBody, setModalBody] = useState<React.JSX.Element>();
  const [canCloseModal, setCanCloseModal] = useState<boolean>(true);
  const [QUYX_METADATA, setQuyxMetadata] = useState<QUYX_METADATA_OBJ>();
  const [balance, setBalance] = useState<number>();

  const openModal = (canClose = true) => {
    setCanCloseModal(canClose);
    setDisplayModal(true);
  };

  const closeModal = () => setDisplayModal(false);

  useEffect(() => {
    (async function () {
      if (!signer) return;

      const balance = await signer.getBalance();
      setBalance(parseInt(balance.toString()) / parseInt(ethers.constants.WeiPerEther.toString()));
    })();
  }, [signer]);

  useEffect(() => {
    if (connectionStatus == "connected") setIsWalletConnected(true);
    if (connectionStatus == "disconnected") setIsWalletConnected(false);
  }, [connectionStatus]);

  useEffect(() => {
    (async function () {
      if (!address || !userInfo || !isLoggedIn) return;

      if (address != userInfo.address) {
        const resp = await api.logout();
        if (resp) window.location.reload();
      }
    })();
  }, [address, userInfo, isLoggedIn]);

  useEffect(() => {
    (async function () {
      if (!isNetworkSupported || !chainId) return;

      const contract = new Contract(String(chainId) as (typeof QUYX_CHAINS)[number], signer);
      const [isPaused, maxCardPerAddress, extraCardPrice, protocolFeePercent, referralFeePercent] =
        await Promise.all([
          contract.isContractPaused(),
          contract.getMaxCardByAddress(),
          contract.getExtraCardPrice(),
          contract.getProtocolFeePercent(),
          contract.getReferralFeePercent(),
        ]);

      let data: QUYX_METADATA_OBJ = {
        isPaused,
        maxCardPerAddress,
        extraCardPrice,
        protocolFeePercent,
        referralFeePercent,
      };

      if (address) {
        const cardsOf = await contract.getCardOf(address);
        data = { ...data, user: { cardsCount: cardsOf.length } };
      }

      localStorage.setItem("__QUYX__META__", JSON.stringify(data));
      setQuyxMetadata(data);
    })();
  }, [chainId, isNetworkSupported, signer, address]);

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

      const quyx_local_metadata = localStorage.getItem("__QUYX__META__");
      if (quyx_local_metadata) setQuyxMetadata(JSON.parse(quyx_local_metadata));

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
        displayModal,
        modalBody,
        chainId,
        isNetworkSupported,
        QUYX_METADATA,
        canCloseModal,
        balance,
        openModal,
        closeModal,
        setModalBody,
        switchChain,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
