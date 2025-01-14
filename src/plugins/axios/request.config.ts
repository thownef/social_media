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

const PRESERVED_KEYS = ['files', 'file', 'images', 'avatar'] as const;

const extractPreservedData = (data: Record<string, any>) => 
  PRESERVED_KEYS.reduce((item, key) => {
    if (key in data) item[key] = data[key];
    return item;
  }, {} as Record<string, any>);

const decamelizeWithPreserved = (data: Record<string, any>) => ({
  ...decamelizeKeys(data),
  ...extractPreservedData(data)
});

// Config Request Interceptor
export const axiosInterceptorRequestConfig = (config: any) => {
  store.dispatch(incrementCountRequest());
  store.dispatch(setLoading(true));

  if (config.data) {
    config.data = decamelizeWithPreserved(config.data);
  }
  
  if (config.params) {
    config.params = decamelizeKeys(config.params);
  }
  
  if (localStorage.getItem("bearer_token")) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("bearer_token")}`;
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
