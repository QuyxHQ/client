import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import settings from "./settings";
import { HttpClient } from "../utils/http.utils";
import { createAsyncLocalStorage } from "./asyncLocalStorage";
import { ConnectedWallet } from "@tonconnect/ui-react";
import { TOAST_STATUS, customToast } from "./toast.utils";

class ApiHttpClient extends HttpClient {
  constructor(options?: AxiosRequestConfig, authToken?: string) {
    super({
      baseURL: options?.baseURL || settings.API_ENDPOINT,
      headers: options?.headers
        ? options.headers
        : {
            accept: "application/json",
            ...(authToken ? { Authorization: authToken } : {}),
            "content-type": "application/json",
          },
    });
  }

  _handleResponse({ data, status: statusCode }: AxiosResponse<any>) {
    const { status, data: responseData } = data;
    if (status || `${statusCode}`.startsWith("20")) {
      return { error: false, data: responseData, statusCode };
    }

    return { error: true, data: responseData, statusCode };
  }

  _handleError(error: AxiosError<any>) {
    const response = {
      error: true,
      statusCode: error.response?.status,
      data: error.response?.data,
    };

    return response;
  }

  getInstance() {
    return this.instance;
  }

  getInstanceWithoutAuth() {
    return this.instanceWithoutAuth;
  }
}

class ApiSdk {
  private apiHttpClient: ApiHttpClient;
  private storage = createAsyncLocalStorage("app");

  constructor(token?: string) {
    this.apiHttpClient = new ApiHttpClient(undefined, token);
  }

  private async getInstance() {
    const token = await this.storage.getItem("token");
    return new ApiSdk(token || undefined);
  }

  async generateToken() {
    const instance = await this.getInstance();
    const { data, error } = await instance.apiHttpClient
      .getInstanceWithoutAuth()
      .get("/session/token");

    if (error) return null;
    return data.token as string;
  }

  async login(walletInfo: ConnectedWallet) {
    const instance = await this.getInstance();
    const { data, error } = await instance.apiHttpClient
      .getInstanceWithoutAuth()
      .post("/user/login", { walletInfo });

    if (error) return;

    const { token, user } = data;
    await this.storage.setItem("token", token);

    return user as QuyxUser;
  }

  async whoami() {
    const instance = await this.getInstance();
    const { data, error } = await instance.apiHttpClient.getInstance().get("/user/whoami");

    if (error) return null;
    return data.user as QuyxUser;
  }

  async search(q: string, page = 1, limit = 10) {
    const instance = await this.getInstance();
    const { data, error } = await instance.apiHttpClient
      .getInstanceWithoutAuth()
      .get(`/user/search?q=${q}&limit=${limit}&page=${page}`);

    if (error) return null;
    return data as { data: QuyxUser[]; pagination: Pagination };
  }

  async logout() {
    const instance = await this.getInstance();
    const { data, error } = await instance.apiHttpClient.getInstance().delete("/session");

    if (error) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: `Unable to logout, Error: ${data}`,
      });

      return false;
    }

    await this.storage.clear();
    return true;
  }

  async edit(input: Omit<QuyxUser, "_id" | "createdAt" | "updatedAt" | "address">) {
    const instance = await this.getInstance();
    const { data, error } = await instance.apiHttpClient.getInstance().put("/user", { ...input });

    if (error) {
      customToast({
        type: TOAST_STATUS.ERROR,
        message: `Unable to update profile details, Error: ${data}`,
      });

      return false;
    }

    return input;
  }

  async findOne(param: string) {
    const instance = await this.getInstance();
    const { data, error } = await instance.apiHttpClient
      .getInstanceWithoutAuth()
      .get(`/user/${param}`);

    if (error) return null;
    return data.user as QuyxUser;
  }

  async getCards(account_address: string, limit = 10, cursor?: string) {
    const instance = await this.getInstance();
    const { data, error } = await instance.apiHttpClient
      .getInstanceWithoutAuth()
      .get(`/nft/card/${account_address}?limit=${limit}${cursor ? `&cursor=${cursor}` : ""}`);

    if (error) return null;
    return data as NftScanByAccountResponse;
  }

  async getUsernames(account_address: string, limit = 10, cursor?: string) {
    const instance = await this.getInstance();
    const { data, error } = await instance.apiHttpClient
      .getInstanceWithoutAuth()
      .get(`/nft/username/${account_address}?limit=${limit}${cursor ? `&cursor=${cursor}` : ""}`);

    if (error) return null;
    return data as NftScanByAccountResponse;
  }

  async getNftTx(token_address: string, limit = 10, cursor?: string) {
    const instance = await this.getInstance();
    const { data, error } = await instance.apiHttpClient
      .getInstanceWithoutAuth()
      .get(`/nft/tx/${token_address}?limit=${limit}${cursor ? `&cursor=${cursor}` : ""}`);

    if (error) return null;
    return data as NftScanNftTxResponse;
  }
}

export const apiSdk = new ApiSdk();
