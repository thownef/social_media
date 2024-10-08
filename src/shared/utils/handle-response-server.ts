import { useAppDispatch } from "@/shared/hooks/useAppHooks";
import { setNotification } from "@/shared/store/notificationSlice";

const dispatch = useAppDispatch();
type HttpMethod = "post" | "get" | "put" | "delete";

export const handleServerError = (method: HttpMethod, message: string) => {
  switch (method) {
    case "post":
      dispatch(setNotification({ message, type: "error" }));
      return;
    default:
      return;
  }
};

export const handleServerSuccess = (method: HttpMethod, message?: string) => {
  const messageLogin = window.location.pathname.includes("login") ? "Login successful" : "";
  const messageUpdateHolidays = window.location.pathname.includes("business-calendar") ? "Updated successfully." : "";

  switch (method) {
    case "post":
      dispatch(setNotification({message: messageLogin || message || messageUpdateHolidays || "Updated successfully.", type: "success"}));
      return;
    case "put":
      dispatch(setNotification({message: message || "Updated successfully.", type: "success"}));
      return;
    case "delete":
      dispatch(setNotification({message: message || "Updated successfully.", type: "success"}));
      return;
    default:
      return;
  }
};
