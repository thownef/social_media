import { addToast } from "@heroui/react";

type HttpMethod = "post" | "get" | "put" | "delete";

export const handleServerError = (method: HttpMethod, message: string) => {
  switch (method) {
    case "post":
      addToast({
        description: message,
        color: "danger",
      });
      return;
    default:
      return;
  }
};

export const handleServerSuccess = (method: HttpMethod, message?: string) => {
  const messageLogin = window.location.pathname.includes("login") ? "Login successful" : "";

  switch (method) {
    case "post":
      addToast({
        description: messageLogin || message || "Created successfully.",
        color: "success",
      });
      return;
    case "put":
      addToast({
        description: message || "Updated successfully.",
        color: "success",
      });
      return;
    case "delete":
      addToast({
        description: message || "Deleted successfully.",
        color: "success",
      });
      return;
    default:
      return;
  }
};
