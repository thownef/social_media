import { camelizeKeys } from "humps";

import { globalNavigate } from "@/shared/components/GlobalHistory/GlobalHistory";
import { ResponseError } from "@/shared/core/types/common.type";

import { useAppDispatch } from "@/shared/hooks/useAppHooks";
import { setLoading } from "@/shared/store/loadingSlice";
import { HttpErrorCodeEnum } from "@/shared/core/enum/http-error-code.enum";
import { logout } from "@/shared/store/authSlice";
import { setNotification } from "@/shared/store/notificationSlice";
import { handleServerError, handleServerSuccess } from "@/shared/utils/handle-response-server";
import { useNavigate } from "react-router-dom";

const dispatch = useAppDispatch();
const navigate = useNavigate();

// Config Response Interceptor
export const axiosInterceptorResponseConfig = (response: any) => {
  dispatch(setLoading(false));
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
      dispatch(logout());
      navigate("/login");
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
    dispatch(setLoading(false));
    const { data: errors } = error.response || {};

    return Promise.reject(errors);
  }

  if (status === HttpErrorCodeEnum.SERVER_ERROR) {
    const { data } = error.response || {};

    if (data?.url_return) {
      dispatch(logout());
      globalNavigate(data.url_return);
    } else {
      dispatch(setNotification({ message: "System Error", type: "error" }));
    }
  }

  if (status === HttpErrorCodeEnum.BAD_REQUEST) {
    dispatch(setNotification({ message: "System Error", type: "error" }));
  }

  dispatch(setLoading(false));

  return Promise.reject(error);
};
