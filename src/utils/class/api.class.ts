import ApiHttpClient from "../api.utils";
import { TOAST_STATUS, customToast } from "../toast.utils";
import { SiweMessage } from "siwe";
import { omit } from "lodash";

class Api {
  constructor(private apiSdk: ApiHttpClient) {}

  //==================================================
  //========= USER METHODS ===========================
  //==================================================

  async prepareMessage({ address, chainId }: { address: string; chainId: number }) {
    const { data, error } = await this.apiSdk.getInstanceWithoutAuth().get("/session/nonce");
    if (error) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: data.message ?? "unabe to get nonce",
      });

      return null;
    }

    const { nonce, issuedAt, expirationTime } = data.data;

    const message = new SiweMessage({
      domain: document.location.host,
      address,
      chainId,
      uri: document.location.origin,
      version: "1",
      statement: `Welcome to Quyx! Sign this message to verify ownership of wallet in order to continue`,
      nonce,
      expirationTime,
      issuedAt,
    });

    return message;
  }

  async login({
    address,
    message,
    signature,
  }: {
    address: string;
    message: SiweMessage;
    signature: string;
  }) {
    const { data, error } = await this.apiSdk
      .getInstanceWithoutAuth()
      .post("/user/siwe", { message, address, signature });

    if (error || !data.status) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: data.message ?? "unable to complete request",
      });

      return false;
    }

    console.log(data);

    const { accessToken, refreshToken } = data.data;
    localStorage.setItem("quyx_user_access_token", accessToken);
    localStorage.setItem("quyx_user_refresh_token", refreshToken);

    return true;
  }

  async current() {
    const { data, error } = await this.apiSdk.getInstance().get("/user/current");
    if (error) return undefined;
    return data.data as QuyxUser;
  }

  async edit({ pfp, email, username }: { pfp: string | null; email: string; username: string }) {
    const { data, error } = await this.apiSdk
      .getInstance()
      .put("/user/edit", { username, email, pfp });

    if (error || !data.status) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: data.message ?? "unable to complete request",
      });

      return false;
    }

    return true;
  }

  async kycInit() {
    const { data, error } = await this.apiSdk.getInstance().post("/user/kyc/init");

    if (error || !data.status) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: data.message ?? "unable to complete request",
      });

      return false;
    }

    customToast({
      type: TOAST_STATUS.SUCCESS,
      message: data.message,
    });

    return true;
  }

  async kycVerify({ otp }: { otp: string }) {
    const { data, error } = await this.apiSdk.getInstance().post("/user/kyc/verify", { otp });

    if (error || !data.status) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: data.message ?? "unable to complete request",
      });

      return false;
    }

    customToast({
      type: TOAST_STATUS.SUCCESS,
      message: data.message,
    });

    return true;
  }

  async getSingleUser({ param }: { param: string }) {
    const { data, error } = await this.apiSdk.getInstanceWithoutAuth().get(`/user/${param}`);
    if (error) return undefined;
    return data.data as QuyxUser;
  }

  async searchForUser({ q, limit = 10, page = 1 }: { q: string; limit?: number; page?: number }) {
    const { data, error } = await this.apiSdk
      .getInstanceWithoutAuth()
      .get(`/user/search?q=${q}&limit=${limit}&page=${page}`);

    if (error) return undefined;
    return data as ApiPaginationResponse<QuyxUser[]>;
  }

  async getAppsConnectedTo({ limit = 10, page = 1 }: { limit?: number; page?: number }) {
    const { data, error } = await this.apiSdk
      .getInstance()
      .get(`/user/apps-connected?&limit=${limit}&page=${page}`);

    if (error) return undefined;
    return data.data as QuyxApp[];
  }

  //==================================================
  //======== REFERRAL METHODS ========================
  //==================================================

  async createRefLink({ card }: { card: string }) {
    const { error, data } = await this.apiSdk.getInstance().post("/referral", { card });
    if (error || !data.status) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: data.message ?? "unable to complete request",
      });

      return null;
    }

    customToast({
      type: TOAST_STATUS.SUCCESS,
      message: data.message,
    });

    return data.data.link as string;
  }

  async referralClickCountUpdate({ ref }: { ref: string }) {
    const { error } = await this.apiSdk.getInstanceWithoutAuth().put(`/referral/${ref}`);
    if (error) return false;
    return true;
  }

  async getReferrals({
    limit = 10,
    page = 1,
    status,
  }: {
    status?: "active" | "inactive";
    limit: number;
    page: number;
  }) {
    let endpoint = "/referral";
    if (status) endpoint = `/referral/${status}`;

    const { data, error } = await this.apiSdk
      .getInstance()
      .get(`${endpoint}?limit=${limit}&page=${page}`);

    if (error) return undefined;
    return data.data as QuyxReferral[];
  }

  async getSingleRef({ ref }: { ref: string }) {
    const { error, data } = await this.apiSdk
      .getInstanceWithoutAuth()
      .get(`/referral/single/${ref}`);

    if (error) return undefined;
    return data.data as QuyxReferral;
  }

  //==================================================
  //======== BOOKMARK METHODS ========================
  //==================================================

  async addToBookmark({ card }: { card: string }) {
    const { data, error } = await this.apiSdk.getInstance().post("/bookmark", { card });
    if (error || !data.status) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: data.message ?? "unable to complete request",
      });

      return false;
    }

    customToast({
      type: TOAST_STATUS.SUCCESS,
      message: data.message,
    });

    return true;
  }

  async removeFromBookmark({ card }: { card: string }) {
    const { data, error } = await this.apiSdk.getInstance().delete(`/bookmark/${card}`);
    if (error || !data.status) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: data.message ?? "unable to complete request",
      });

      return false;
    }

    customToast({
      type: TOAST_STATUS.SUCCESS,
      message: data.message,
    });

    return true;
  }

  async getBookmarks({ limit = 10, page = 1 }) {
    const { data, error } = await this.apiSdk
      .getInstance()
      .get(`/bookmark?limit=${limit}&page=${page}`);

    if (error) return undefined;
    return data.data as QuyxBookmark[];
  }

  //==================================================
  //============= BID METHODS ========================
  //==================================================

  async userBids(limit = 10, page = 1) {
    const { data, error } = await this.apiSdk.getInstance().get(`/bid?limit=${limit}&page=${page}`);

    if (error) return undefined;
    return data.data as QuyxBid[];
  }

  //==================================================
  //============= CARD METHODS =======================
  //==================================================

  async createCard(props: {
    username: string;
    pfp: string;
    chainId: string;
    bio: string;
    description: string | null;
    tags: string[] | null;
  }) {
    const { data, error } = await this.apiSdk.getInstance().post(`/card`, props);
    if (error || !data.status) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: data.message ?? "unable to complete request",
      });

      return null;
    }

    customToast({
      type: TOAST_STATUS.SUCCESS,
      message: data.message,
    });

    return data.data as QuyxCard;
  }

  async editCard(props: {
    username: string;
    pfp: string;
    chainId: string;
    card: string;
    bio: string;
    description: string | null;
    tags: string[] | null;
  }) {
    const { data, error } = await this.apiSdk
      .getInstance()
      .put(`/card/${props.chainId}/${props.card}`, omit(props, ["chainId", "card"]));

    if (error || !data.status) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: data.message ?? "unable to complete request",
      });

      return false;
    }

    customToast({
      type: TOAST_STATUS.SUCCESS,
      message: data.message,
    });

    return true;
  }

  async getUserCards(
    {
      chainId,
      address,
      mode,
    }: {
      chainId: string;
      address: string;
      mode?: "owner" | "created" | "sold" | "bought" | "sale";
    },
    { limit = 10, page = 1 }
  ) {
    let endpoint = "/card/user/all";
    if (mode) endpoint = `/card/user/${mode}`;

    const { data, error } = await this.apiSdk
      .getInstance()
      .get(`${endpoint}/${chainId}/${address}?limit=${limit}&page=${page}`);

    if (error) return undefined;
    return data.data as QuyxCard[];
  }

  async getCard({ chainId, card }: { chainId: string; card: string }) {
    const { data, error } = await this.apiSdk
      .getInstanceWithoutAuth()
      .get(`/card/${chainId}/${card}`);

    if (error) return undefined;
    return data.data as QuyxCard;
  }

  //==================================================
  //============= MARKETPLACE METHODS ================
  //==================================================

  async getTags({ chainId }: { chainId: string }) {
    const { data, error } = await this.apiSdk
      .getInstanceWithoutAuth()
      .get(`/marketplace/tags/all/${chainId}`);

    if (error) return undefined;
    return data.data as string[];
  }

  async getCardsByTag(
    { chainId, tag }: { chainId: string; tag: string },
    { limit = 10, page = 1 }
  ) {
    const { data, error } = await this.apiSdk
      .getInstanceWithoutAuth()
      .get(`/marketplace/tags/cards/${chainId}/${tag}?limit=${limit}&page=${page}`);

    if (error) return undefined;
    return data.data as QuyxCard[];
  }

  async getTrendingTag5({ chainId }: { chainId: string }) {
    const { data, error } = await this.apiSdk
      .getInstanceWithoutAuth()
      .get(`/marketplace/tags/trending/${chainId}`);

    if (error) return undefined;
    return data as ApiResponse<Record<string, QuyxCard[]>>;
  }

  async getTopSellers({ limit = 10 }: { chainId: string; limit: number }) {
    const { data, error } = await this.apiSdk
      .getInstanceWithoutAuth()
      .get(`/marketplace/top/sellers?limit=${limit}`);

    if (error) return undefined;
    return data as ApiResponse<QuyxUser[]>;
  }

  async getTopCardsByVersion({ chainId, limit = 10 }: { chainId: string; limit: number }) {
    const { data, error } = await this.apiSdk
      .getInstanceWithoutAuth()
      .get(`/marketplace/top/cards/version/${chainId}/?limit=${limit}`);

    if (error) return undefined;
    return data as ApiResponse<QuyxCard[]>;
  }

  async getTopCardsByBid({ chainId, limit = 10 }: { chainId: string; limit: number }) {
    const { data, error } = await this.apiSdk
      .getInstanceWithoutAuth()
      .get(`/marketplace/top/cards/bids/${chainId}/?limit=${limit}`);

    if (error) return undefined;
    return data as ApiResponse<QuyxCard[]>;
  }

  async getCards({ chainId }: { chainId: string }, { limit = 10, page = 1 }) {
    const { data, error } = await this.apiSdk
      .getInstanceWithoutAuth()
      .get(`/marketplace/cards/${chainId}?limit=${limit}&page=${page}`);

    if (error) return undefined;
    return data.data as QuyxCard[];
  }

  //==================================================
  //========= MISC ===================================
  //==================================================

  async uploadImage({ base64Image }: { base64Image: string }) {
    const { data, error } = await this.apiSdk
      .getInstanceWithoutAuth()
      .post("/upload-image", { base64: base64Image });

    if (error) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: data.message ?? "unable to upload image",
      });

      return null;
    }

    return data.data.uri as string;
  }
}

export const api = new Api(new ApiHttpClient());
