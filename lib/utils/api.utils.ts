import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpClient } from "./http.utils";
import { NEXT_PUBLIC_API_ENDPOINT } from "./settings";

export default class ApiHttpClient extends HttpClient {
  constructor(options?: AxiosRequestConfig) {
    const accessToken = localStorage.getItem("quyx_user_access_token");
    const refreshToken = localStorage.getItem("quyx_user_refresh_token");

    super({
      baseURL: options?.baseURL || NEXT_PUBLIC_API_ENDPOINT,
      headers: options?.headers
        ? options.headers
        : {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
            ...(refreshToken ? { "X-Refresh": refreshToken } : {}),
          },
    });
  }

  _handleResponse({ data, status: statusCode }: AxiosResponse<any>) {
    return { error: false, statusCode, data };
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