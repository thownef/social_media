import { decamelizeKeys } from "humps";
import { store } from "@/shared/store";
import { decrementCountRequest, incrementCountRequest, resetCountRequest, setLoading } from "@/shared/store/loadingSlice";

// Config Axios
export const axiosConfig = {
  baseURL: import.meta.env.VITE_APP_ROOT_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 30000,
};

// Config Request Interceptor
export const axiosInterceptorRequestConfig = (config: any) => {
  store.dispatch(incrementCountRequest());
  store.dispatch(setLoading(true));

  if (config.data && config.headers["Content-Type"] !== "multipart/form-data") {
    config.data = decamelizeKeys(config.data);
  }

  if (config.params) {
    config.params = decamelizeKeys(config.params);
  }

  if (localStorage.getItem("accessToken")) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  }

  return config;
};

// Config Request Error Interceptor
export const axiosInterceptorRequestError = (error: any) => {
  store.dispatch(decrementCountRequest());
  const loadingState = store.getState().loading;

  if (loadingState.countRequest <= 0) {
    store.dispatch(setLoading(false));
    store.dispatch(resetCountRequest());
  }

  return Promise.reject(error);
};
