import { ethers, BigNumber } from "ethers";
import abi from "../json/abi.json";
import { TOAST_STATUS, customToast } from "../toast.utils";

export default class Contract {
  private contract: ethers.Contract;
  public static chainIdToContractAddress: Record<(typeof QUYX_CHAINS)[number], string> = {
    "97": "0x7ae6d600587eC7d6f91Fb06bb3f84DA098Aa2f4A",
  };

  constructor(chainId: (typeof QUYX_CHAINS)[number], signer?: ethers.Signer) {
    this.contract = new ethers.Contract(Contract.chainIdToContractAddress[chainId], abi, signer);
  }

  private toNumber(wei: ethers.BigNumberish) {
    return parseFloat(ethers.utils.formatUnits(wei, 18));
  }

  async isContractPaused() {
    const isPaused = await this.contract.isPaused();
    return isPaused as boolean;
  }

  async getCardOf(address: string) {
    const cards = await this.contract.cardsOf(address);
    return cards as string[];
  }

  async getBalance(address: string) {
    const balance = await this.contract.balanceOf(address);
    return this.toNumber(balance);
  }

  async getRestrictedBalance(address: string) {
    const balance = await this.contract.restrictedBalance(address);
    return this.toNumber(balance);
  }

  async getSpendableBalance(address: string) {
    const balance = await this.contract.spendingBalanceOf(address);
    return this.toNumber(balance);
  }

  async getCardBids(cardIdentifier: number) {
    const bids = await this.contract.bids(cardIdentifier);
    return bids as QuyxBid[];
  }

  async getHigherBidderOnCard(cardIdentifier: number) {
    const bid = await this.contract.highestBidder(cardIdentifier);
    return bid as QuyxBid;
  }

  async getMaxCardByAddress() {
    const value = await this.contract.MAX_CARD_PER_ADDRESS();
    return parseInt(value);
  }

  async getProtocolFeePercent() {
    const value = await this.contract.protocolFeePercent();
    return this.toNumber((value as BigNumber).div(ethers.constants.One));
  }

  async getReferralFeePercent() {
    const value = await this.contract.referralFeePercent();
    return this.toNumber((value as BigNumber).div(ethers.constants.One));
  }

  async getExtraCardPrice() {
    const price = await this.contract.EXTRA_CARD_PRICE();
    return this.toNumber(price);
  }

  async getCardIdFromTx(tx: any) {
    try {
      const receipt = await tx.wait();
      const cardId = receipt.events[0].args.cardId;

      return parseInt(cardId.toString());
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e?.data?.message ?? "unable to complete request",
      });

      return false;
    }
  }

  async newCard(tempToken: string, value?: string) {
    try {
      const tx = await this.contract.newCard(tempToken, value ? { value } : undefined);
      return tx;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e?.data?.message ?? "unable to complete request",
      });

      return false;
    }
  }

  async deleteCard(cardIdentifier: number) {
    try {
      await this.contract.deleteCard(cardIdentifier);

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "card deleted successfully!",
      });

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e?.data?.message ?? "unable to complete request",
      });

      return false;
    }
  }

  async listCard({ cardIdentifier, isAuction, listingPrice, maxNumberOfBids, end }: ListCardProps) {
    try {
      await this.contract.listCard(
        cardIdentifier,
        isAuction,
        listingPrice,
        maxNumberOfBids,
        end ? end : new Date().getTime()
      );

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e?.data?.message ?? "unable to complete request",
      });

      return false;
    }
  }

  async unlistCard(cardIdentifier: number) {
    try {
      await this.contract.unlistCard(cardIdentifier);

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "card unlisted successfully!",
      });

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e?.data?.message ?? "unable to complete request",
      });

      return false;
    }
  }

  async buyCard(
    { cardIdentifier, referredBy = ethers.constants.AddressZero }: BuyCardProps,
    value?: string
  ) {
    try {
      await this.contract.buyCard(cardIdentifier, referredBy, value ? { value } : undefined);

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "card bought successfully!",
      });

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e?.data?.message ?? "unable to complete request",
      });

      return false;
    }
  }

  async placeBid(
    { cardIdentifier, referredBy = ethers.constants.AddressZero }: BuyCardProps,
    value?: string
  ) {
    try {
      await this.contract.placeBid(cardIdentifier, referredBy, value ? { value } : undefined);

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "bid placed successfully!",
      });

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e?.data?.message ?? "unable to complete request",
      });

      return false;
    }
  }

  async endAuction(cardIdentifier: number) {
    try {
      await this.contract.endAuction(cardIdentifier);

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "auction ended successfully!",
      });

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e?.data?.message ?? "unable to complete request",
      });

      return false;
    }
  }

  async withdrawFromAuction(cardIdentifier: number) {
    try {
      await this.contract.withdrawFromAuction(cardIdentifier);

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "funds added to spendable balance!",
      });

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e?.data?.message ?? "unable to complete request",
      });

      return false;
    }
  }

  async withdraw(amount: ethers.BigNumber) {
    try {
      await this.contract.withdraw(amount);

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "withdrawn to wallet successfully!",
      });

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e?.data?.message ?? "unable to complete request",
      });

      return false;
    }
  }
}
