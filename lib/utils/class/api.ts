import ApiHttpClient from "../api.utils";
import { TOAST_TYPE, customToast } from "../toast";

class Api {
  constructor(private apiSdk: ApiHttpClient) {}

  async login() {}

  async current() {
    const { data, error } = await this.apiSdk
      .getInstance()
      .get("/user/current");

    if (error) return undefined;
    return data.data as QuyxUser;
  }

  async edit({ username, pfp, email }: EditUserProps) {
    const { error, data } = await this.apiSdk
      .getInstance()
      .put("/user/edit", { username, email, pfp });

    if (error) {
      customToast({
        type: TOAST_TYPE.ERROR,
        message: data.message ?? "Unable to complete request",
      });

      return false;
    }

    customToast({
      type: TOAST_TYPE.SUCCESS,
      message: data.message,
    });

    return true;
  }

  async initKYC() {
    const { data, error } = await this.apiSdk
      .getInstance()
      .post("/user/kyc/init");

    if (error) {
      customToast({
        type: TOAST_TYPE.ERROR,
        message: data.message ?? "Unable to complete request",
      });

      return false;
    }

    customToast({
      type: TOAST_TYPE.SUCCESS,
      message: data.message,
    });

    return true;
  }

  async verifyKYC({ otp }: { otp: string }) {
    const { data, error } = await this.apiSdk
      .getInstance()
      .post("/user/kyc/verify", { otp });

    if (error) {
      customToast({
        type: TOAST_TYPE.ERROR,
        message: data.message ?? "Unable to complete request",
      });

      return false;
    }

    customToast({
      type: TOAST_TYPE.SUCCESS,
      message: data.message,
    });

    return true;
  }

  //# username or address
  async getUser({ param }: { param: string }) {
    const { data, error } = await this.apiSdk
      .getInstance()
      .get(`/user/${param}`);

    if (error) return undefined;
    return data.data as QuyxUser;
  }

  async searchUsser({
    q,
    limit,
    page,
  }: {
    q: string;
    limit: number;
    page: number;
  }) {
    const { data } = await this.apiSdk
      .getInstance()
      .get(`/user/search?q=${q}&limit=${limit}&page=${page}`);

    return data as ApiResponseWithPagination<QuyxUser>;
  }
}

export const api = new Api(new ApiHttpClient());
