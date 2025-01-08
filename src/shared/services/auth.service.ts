import { ApiService } from "@/shared/services";

const BaseUrl = "auth";

export function getProfile() {
  return ApiService.get(`${BaseUrl}/me?with=profile`).then((resp) => resp);
}
