import { useAppDispatch } from "@/shared/hooks/useAppHooks";
import { setLoading } from "@/shared/store/loadingSlice";
import { decamelizeKeys } from "humps";
const dispatch = useAppDispatch();

// Config Axios
export const axiosConfig = {
  baseURL: import.meta.env.VITE_APP_ROOT_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 30000, // request timeout
};

// Config Request Interceptor
export const axiosInterceptorRequestConfig = (config: any) => {
  dispatch(setLoading(true));
  if (config.data) {
    config.data = config.url?.includes("import") ? config.data : decamelizeKeys(config.data);
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
  dispatch(setLoading(false));

  return Promise.reject(error);
};
