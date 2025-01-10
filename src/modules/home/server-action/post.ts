import { Post } from "@/modules/home/core/types/post.type";
import { getPosts } from "@/modules/home/services/post.service";
import { Pagination } from "@/shared/core/types";

export const fetchPostList = async (params: { [key: string]: any }) => {
  try {
    const res = await getPosts(params);

    if (res?.data) {

      const { pagination, data } = res.data;

      return {
        pagination: pagination as Pagination,
        data: data as Post[],
      };
    }

    return null;
  } catch (err) {
    return null;
  }
};
