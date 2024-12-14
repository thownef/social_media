import { store } from "@/shared/store";
import { setNotification } from "@/shared/store/notificationSlice";

type HttpMethod = "post" | "get" | "put" | "delete";

export const handleServerError = (method: HttpMethod, message: string) => {
  switch (method) {
    case "post":
      store.dispatch(setNotification({ message, type: "error" }));
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
      store.dispatch(setNotification({message: messageLogin || message || messageUpdateHolidays || "Created successfully.", type: "success"}));
      return;
    case "put":
      store.dispatch(setNotification({message: message || "Updated successfully.", type: "success"}));
      return;
    case "delete":
      store.dispatch(setNotification({message: message || "Deleted successfully.", type: "success"}));
      return;
    default:
      return;
  }
};
