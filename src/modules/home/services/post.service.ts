import { ApiService } from "@/shared/services";

const BaseUrl = "posts";

export function getPosts(params: { [key: string]: any }) {
  return ApiService.get(`${BaseUrl}`, params).then((resp) => resp);
}

export function createPost(body: { [key: string]: any }) {
  return ApiService.post(`${BaseUrl}`, body).then((resp) => resp);
}

