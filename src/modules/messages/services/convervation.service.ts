import { ApiService } from "@/shared/services";

const BaseUrl = "conversations";

export function getConversations(params: { [key: string]: any }) {
  return ApiService.get(`${BaseUrl}`, { params }).then((resp) => resp);
}
