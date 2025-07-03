import { AppError } from "@utils/AppError";

import axios, { AxiosInstance } from "axios";

type SignOut = () => void;

type APIIntanceProps = AxiosInstance & {
  registerInterceptTokenManager: (SignOut: SignOut) => () => void
}

const api = axios.create({
  baseURL: "http://192.168.1.23:3333"
}) as APIIntanceProps;

api.registerInterceptTokenManager = SignOut => {
  const interceptTokenManager = api.interceptors.response.use(
    (response) => response, requestError => {

      if (requestError?.response?.status === 401) {
        if (requestError.response.data?.message === "token.expired" || requestError.response.data?.message === 'token.invalid') {
          
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
