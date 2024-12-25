import { camelizeKeys } from 'humps';
import { ResponseError } from "@/shared/core/types/common.type";
import { decrementCountRequest, resetCountRequest, setLoading } from "@/shared/store/loadingSlice";
import { HttpErrorCodeEnum } from "@/shared/core/enum/http-error-code.enum";
import { logout } from "@/shared/store/authSlice";
import { setNotification } from "@/shared/store/notificationSlice";
import { handleServerError, handleServerSuccess } from "@/shared/utils/handle-response-server";
import { globalNavigate } from "@/shared/components/GlobalHistory/GlobalHistory";
import { store } from '@/shared/store';

// Config Response Interceptor
export const axiosInterceptorResponseConfig = (response: any) => {
  store.dispatch(decrementCountRequest());
  if (store.getState().loading.countRequest <= 0) {
    store.dispatch(setLoading(false));
    store.dispatch(resetCountRequest());
  }
  if (response.data?.data) {
    const { data } = response.data;

    response.data.data = camelizeKeys(data);
  }
  handleServerSuccess(response?.config?.method);

  return response;
};

// Config Response Error Interceptor
export const axiosInterceptorResponseError = (error: ResponseError) => {
  const resError = JSON.parse(JSON.stringify(error));

  // Timeout web
  if (resError?.message?.includes("timeout of 30000ms exceeded")) {
  }
  const { status } = error.response || { status: 500 };

  // Redirect to Error Page
  if (status === HttpErrorCodeEnum.UNAUTHORIZED) {
    if (!window.location.pathname.includes("/login")) {
      store.dispatch(logout());
      globalNavigate("/login");
    }
    const { config } = error;

    handleServerError(config.method, "Email or password is incorrect");
  }
  if (status === HttpErrorCodeEnum.NOT_FOUND) {
    globalNavigate("/not-found");
  }

  if (status === HttpErrorCodeEnum.FORBIDDEN || Math.floor(status / 100) === 5) {
    // Redirect Error Page
  }

  if (status === HttpErrorCodeEnum.UNPROCESSABLE_CONTENT) {
    store.dispatch(decrementCountRequest());
    if (store.getState().loading.countRequest <= 0) {
      store.dispatch(setLoading(false));
      store.dispatch(resetCountRequest());
    }
    const { data: errors } = error.response || {};

    return Promise.reject(errors);
  }

  if (status === HttpErrorCodeEnum.SERVER_ERROR) {
    const { data } = error.response || {};

    if (data?.url_return) {
      store.dispatch(logout());
      globalNavigate(data.url_return);
    } else {
      store.dispatch(setNotification({ message: "System Error", type: "error" }));
    }
  }

  if (status === HttpErrorCodeEnum.BAD_REQUEST) {
    store.dispatch(setNotification({ message: "System Error", type: "error" }));
  }

  store.dispatch(setLoading(false));

  return Promise.reject(error);
};
