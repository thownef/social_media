import { ApiService } from "@/shared/services";

const BaseUrl = "posts";

export function getPosts(params: { [key: string]: any }) {
  return ApiService.get(`${BaseUrl}`, params).then((resp) => resp);
}

export function createPost(body: { [key: string]: any }) {
  return ApiService.post(`${BaseUrl}`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((resp) => resp);
}

export function updatePost(id: number, body: { [key: string]: any }) {
  return ApiService.put(`${BaseUrl}/${id}`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((resp) => resp);
}

export function deletePost(id: number) {
  return ApiService.delete(`${BaseUrl}/${id}`).then((resp) => resp);
}
