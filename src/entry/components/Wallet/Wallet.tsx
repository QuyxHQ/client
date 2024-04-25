import { useEffect, useState } from "react";
import { useAppStore } from "../../context/AppProvider";
import { useDisconnect, useWalletConfig } from "@thirdweb-dev/react";
import {
  copyToClipboard,
  getCurrentBNBPriceUSD,
  getRealLink,
  truncateAddress,
} from "../../../utils/helper";
import { DEFAULT_CHAIN } from "../../../utils/constants";
import QRCode from "qrcode";
import { isAddress } from "ethers/lib/utils";
import { TOAST_STATUS, customToast } from "../../../utils/toast.utils";
import { ethers } from "ethers";
import Contract from "../../../utils/class/contract.class";

type Props = {
  displayWallet: boolean;
  setDisplayWallet: (value: boolean) => void;
};

type Balance = {
  usd: number;
  ethers: number;
};

const Wallet = ({ displayWallet, setDisplayWallet }: Props) => {
  const { balance: _walletBalance, address, isWalletConnected, signer, chainId } = useAppStore();
  const walletConfig = useWalletConfig();
  const _disconnect = useDisconnect();

  async function disconnect() {
    if (!confirm("Are you sure you want to disconnect wallet?")) return;
    await _disconnect();
  }

  const [displayInnerModal, setDisplayInnerModal] = useState<boolean>(false);
  const [innerModalContent, setInnerModalContent] = useState<React.JSX.Element>();
  const [walletbalance, setWalletBalance] = useState<Balance>();
  const [spendableBalance, setSpendableBalance] = useState<Balance>();
  const [restrictedBalance, setRestrictedBalance] = useState<Balance>();
  const [portfolioBalance, setPortfolioBalance] = useState<number>();

  useEffect(() => {
    (async function () {
      const contract = new Contract(String(chainId) as any, signer);
      const [spendableBalanceOf, restrictedBalanceOf] = await Promise.all([
        contract.getBalance(address!),
        contract.getSpendableBalance(address!),
        contract.getRestrictedBalance(address!),
      ]);

      setWalletBalance({
        ethers: _walletBalance ?? 0,
        usd: (await getCurrentBNBPriceUSD()) * (_walletBalance ?? 0),
      });

      setSpendableBalance({
        ethers: spendableBalanceOf,
        usd: (await getCurrentBNBPriceUSD()) * spendableBalanceOf,
      });

      setRestrictedBalance({
        ethers: restrictedBalanceOf,
        usd: (await getCurrentBNBPriceUSD()) * restrictedBalanceOf,
      });

      setPortfolioBalance(
        ((_walletBalance ?? 0) + spendableBalanceOf + restrictedBalanceOf) *
          (await getCurrentBNBPriceUSD())
      );
    })();
  }, []);

  function handleOverlayClick(e: any) {
    if (e.target.classList.contains("modal")) setDisplayWallet(false);
    return;
  }

  function handleInnerOverlayClick(e: any) {
    if (e.target.classList.contains("slide-up-modal")) setDisplayInnerModal(false);
    return;
  }

  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.keyCode === 27 && displayWallet) setDisplayWallet(false);
    };

    if (displayWallet) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [displayWallet]);

  return !isWalletConnected ? null : (
    <div className={`modal ${displayWallet ? "d-block" : "d-none"}`} onClick={handleOverlayClick}>
      <div className="wallet-box">
        <div>
          <div className="close-modal" onClick={() => setDisplayWallet(false)}>
            <i className="h h-x" />
          </div>

          <div className="wallet-config bg-dark d-flex align-items-center px-4">
            <img src={walletConfig?.meta.iconURL} alt={walletConfig?.meta.name} />

            <div className="d-flex align-items-center info">
              <p>{truncateAddress({ address: address! })}</p>

              <div className="d-flex align-items-center" style={{ gap: "0.55rem" }}>
                <div className="copy" onClick={() => copyToClipboard(address ?? "")}>
                  <i className="h h-copy" />
                </div>
                <div className="copy" onClick={disconnect}>
                  <i className="h h-logout" />
                </div>
              </div>
            </div>
          </div>

          <div className="balance-area bg-dark d-flex flex-column px-4">
            <div className="balance">
              <h1>${portfolioBalance == undefined ? "-.--" : portfolioBalance.toFixed(2)} USD</h1>
              <p>Portfolio Balance</p>
            </div>

            <div className="buttons d-flex align-items-center">
              <button
                onClick={() => {
                  setInnerModalContent(<SendEthersModal />);
                  setDisplayInnerModal(true);
                }}
              >
                <i className="h h-arrow-up-right" />
              </button>

              <button
                onClick={() => {
                  setInnerModalContent(<DepositEthersModal />);
                  setDisplayInnerModal(true);
                }}
              >
                <i className="h h-arrow-down-right" />
              </button>

              <button
                onClick={() => {
                  setInnerModalContent(<WithdrawEthersFromContractModal />);
                  setDisplayInnerModal(true);
                }}
              >
                <i className="h h-bitcoin-sign" />
              </button>
            </div>
          </div>

          <hr />

          <div className="body px-4">
            <ul>
              <li className="w-100">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center coin">
                    <div>
                      <img
                        src={getRealLink(DEFAULT_CHAIN.icon.url)}
                        width={DEFAULT_CHAIN.icon.width}
                        height={DEFAULT_CHAIN.icon.height}
                        alt={DEFAULT_CHAIN.name}
                      />
                    </div>

                    <div className="d-flex flex-column info">
                      <h3>
                        Balance <span>(connected wallet)</span>
                      </h3>
                    </div>
                  </div>

                  <div className="bal d-flex flex-column align-items-end">
                    <h4>{!walletbalance ? "-.--" : walletbalance.ethers.toFixed(3)} BNB</h4>
                    <p>${!walletbalance ? "-.--" : walletbalance.usd.toFixed(2)} USD</p>
                  </div>
                </div>
              </li>

              <li className="w-100">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center coin">
                    <div>
                      <img
                        src={getRealLink(DEFAULT_CHAIN.icon.url)}
                        width={DEFAULT_CHAIN.icon.width}
                        height={DEFAULT_CHAIN.icon.height}
                        alt={DEFAULT_CHAIN.name}
                      />
                    </div>

                    <div className="d-flex flex-column info">
                      <h3>
                        Contract Balance <span>(spendable)</span>
                      </h3>
                    </div>
                  </div>

                  <div className="bal d-flex flex-column align-items-end">
                    <h4>{!spendableBalance ? "-.--" : spendableBalance.ethers.toFixed(3)} BNB</h4>
                    <p>${!spendableBalance ? "-.--" : spendableBalance.usd.toFixed(2)} USD</p>
                  </div>
                </div>
              </li>

              <li className="w-100">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center coin">
                    <div>
                      <img
                        src={getRealLink(DEFAULT_CHAIN.icon.url)}
                        width={DEFAULT_CHAIN.icon.width}
                        height={DEFAULT_CHAIN.icon.height}
                        alt={DEFAULT_CHAIN.name}
                      />
                    </div>

                    <div className="d-flex flex-column info">
                      <h3>
                        Contract Balance <span>(restricted)</span>
                      </h3>
                    </div>
                  </div>

                  <div className="bal d-flex flex-column align-items-end">
                    <h4>{!restrictedBalance ? "-.--" : restrictedBalance.ethers.toFixed(3)} BNB</h4>
                    <p>${!restrictedBalance ? "-.--" : restrictedBalance.usd.toFixed(2)} USD</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`slide-up-modal ${displayInnerModal ? "d-block" : "d-none"}`}
          onClick={handleInnerOverlayClick}
        >
          <div className="content">{innerModalContent || ""}</div>
        </div>
      </div>
    </div>
  );
};

const DepositEthersModal = () => {
  const { address } = useAppStore();
  const [qr, setQr] = useState<string>("");

  useEffect(() => {
    (async function () {
      try {
        const data = await QRCode.toDataURL(address || "");
        setQr(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [address]);

  return (
    <>
      <h3>Deposit Ethers</h3>
      <img src={qr} alt={address} />
      <p>
        Scan QR code to deposit ethers to <br />
        connected wallet
      </p>
    </>
  );
};

const SendEthersModal = () => {
  const { signer } = useAppStore();

  const [to, setTo] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function send() {
    if (!signer || isLoading) return;

    if (!isAddress(to)) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: "not a valid ethereum address",
      });

      return;
    }

    if (value == "0") {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: "value cannot be empty",
      });

      return;
    }

    setIsLoading(true);

    try {
      await signer.sendTransaction({
        to,
        value: ethers.utils.parseUnits(value, "ether"),
      });

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: `${value} ethers sent to ${truncateAddress({ address: to })}`,
      });
    } catch (e: any) {
      console.error(e);

      customToast({
        type: TOAST_STATUS.ERROR,
        message: "unable to complete action",
      });
    } finally {
      setIsLoading(false);
    }

    return;
  }

  return (
    <>
      <h3>Send Ethers</h3>

      <div className="form-group">
        <label htmlFor="to">To (funds destination)</label>
        <input
          type="string"
          placeholder="e.g. 0x0...."
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          placeholder="e.g. 0.01, 0.1"
          id="amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <button onClick={send} disabled={isLoading}>
        {isLoading ? <span className="loader-span-sm"></span> : "Send Ethers"}
      </button>
    </>
  );
};

const WithdrawEthersFromContractModal = () => {
  const { chainId, signer } = useAppStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  async function withdraw() {
    if (!signer || isLoading) return;

    if (value == "0") {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: "value cannot be empty",
      });

      return;
    }

    setIsLoading(true);
    const contract = new Contract(String(chainId) as any, signer);
    await contract.withdraw(ethers.utils.parseUnits(value, "ether"));
    // const resp = a
    setIsLoading(false);
  }

  return (
    <>
      <h3>
        Withdraw Ethers from <br /> Contract
      </h3>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          placeholder="e.g. 0.01, 0.1, 1, etc."
          id="amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <button disabled={isLoading} onClick={withdraw}>
        {isLoading ? <span className="loader-span-sm"></span> : "Withdraw"}
      </button>
    </>
  );
};

export default Wallet;
