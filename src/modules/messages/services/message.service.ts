import { ApiService } from "@/shared/services";

const BaseUrl = "messages";

export function getMessages(params: { [key: string]: any }) {
  return ApiService.get(`${BaseUrl}`, params).then((resp) => resp);
}

export function sendMessage(body: { [key: string]: any }) {
  return ApiService.post(`${BaseUrl}`, body).then((resp) => resp);
}
