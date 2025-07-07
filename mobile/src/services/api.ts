import { storageAuthTokenGet } from "@storage/storageAuthToken";
import { AppError } from "@utils/AppError";

import axios, { AxiosInstance, AxiosError } from "axios";

type SignOut = () => void;

type PromiseType = {
  onSucess: (token: string) => void;
  onFailed: (error: AxiosError) => void;
}

type APIIntanceProps = AxiosInstance & {
  registerInterceptTokenManager: (SignOut: SignOut) => () => void
}

const api = axios.create({
  baseURL: "http://192.168.0.32:3333"
}) as APIIntanceProps;

let failedQueue: Array<PromiseType> = [];
let isRefreshing = false;

api.registerInterceptTokenManager = SignOut => {
  const interceptTokenManager = api.interceptors.response.use(
    (response) => response, async (requestError) => {

      if (requestError?.response?.status === 401) {
        if (requestError.response.data?.message === "token.expired" || requestError.response.data?.message === 'token.invalid') {

          const { refresh_token } = await storageAuthTokenGet()

          if (!refresh_token) {
            SignOut();
            return Promise.reject(requestError);
          }

          const originalRequestConfig = requestError.config

          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({
                onSucess: (token: string) => {
                  originalRequestConfig.headers = { 'Authorization': `Bearer ${token}` };
                  resolve(api(originalRequestConfig))
                },
                onFailed: (error: AxiosError) => {
                  reject(error)
                },
              });
            });
          }

          isRefreshing = true;

          return new Promise(async (resolve, reject) => {
            try {

            } catch (error: any) {

            } finally {
              isRefreshing = false;
              failedQueue = [];
            }
          })
        }
        SignOut()
      }

      if (requestError.response && requestError.response.data) {
        return Promise.reject(new AppError(requestError.response.data.message));
      } else {
        return Promise.reject(requestError);
      }

    }
  );

  return () => {
    api.interceptors.response.eject(interceptTokenManager);
  };
};

export { api };
