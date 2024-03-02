import { ethers } from "ethers";
import abi from "../json/abi.json";
import { TOAST_STATUS, customToast } from "../toast.utils";

const chainIdToContractAddress: Record<(typeof QUYX_CHAINS)[number], string> = {
  "5": "0x....",
  "84531": "0x...",
  "97": "0x...",
};

export default class Contract {
  private contract: ethers.Contract;

  constructor(chainId: (typeof QUYX_CHAINS)[number], signer?: ethers.Signer) {
    this.contract = new ethers.Contract(
      chainIdToContractAddress[chainId],
      abi,
      signer
    );
  }

  private toNumber(wei: ethers.BigNumberish) {
    return parseInt(ethers.utils.formatEther(wei));
  }

  async isContractPaused() {
    const isPaused = await this.contract.isPaused;
    return isPaused as boolean;
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
    const value = await this.contract.MAX_CARD_PER_ADDRESS;
    return parseInt(value);
  }

  async getExtraCardPrice() {
    const price = await this.contract.EXTRA_CARD_PRICE;
    return this.toNumber(price);
  }

  async newCard(tempToken: string) {
    try {
      await this.contract.newCard(tempToken);

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "card created successfully!",
      });

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e.message ?? "unable to complete request",
      });

      console.error(e);
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
        message: e.message ?? "unable to complete request",
      });

      console.error(e);
      return false;
    }
  }

  async listCard({
    cardIdentifier,
    isAuction,
    listingPrice,
    maxNumberOfBids,
  }: ListCardProps) {
    try {
      const end = Date.now();

      await this.contract.listCard(
        cardIdentifier,
        isAuction,
        listingPrice,
        maxNumberOfBids,
        end
      );

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "card listed successfully!",
      });

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e.message ?? "unable to complete request",
      });

      console.error(e);
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
        message: e.message ?? "unable to complete request",
      });

      console.error(e);
      return false;
    }
  }

  async buyCard({
    cardIdentifier,
    referredBy = ethers.constants.AddressZero,
  }: BuyCardProps) {
    try {
      await this.contract.buyCard(cardIdentifier, referredBy);

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "card bought successfully!",
      });

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e.message ?? "unable to complete request",
      });

      console.error(e);
      return false;
    }
  }

  async placeBid({
    cardIdentifier,
    referredBy = ethers.constants.AddressZero,
  }: BuyCardProps) {
    try {
      await this.contract.placeBid(cardIdentifier, referredBy);

      customToast({
        type: TOAST_STATUS.SUCCESS,
        message: "bid placed successfully!",
      });

      return true;
    } catch (e: any) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: e.message ?? "unable to complete request",
      });

      console.error(e);
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
        message: e.message ?? "unable to complete request",
      });

      console.error(e);
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
        message: e.message ?? "unable to complete request",
      });

      console.error(e);
      return false;
    }
  }

  async withdraw(amount: number) {
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
        message: e.message ?? "unable to complete request",
      });

      console.error(e);
      return false;
    }
  }
}
