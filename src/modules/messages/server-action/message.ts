import { Message } from "@/modules/messages/core/types/message.type";
import { getMessages } from "@/modules/messages/services/message.service";
import { Pagination } from "@/shared/core/types/common.type";

export const fetchMessageList = async (params: { [key: string]: any }) => {
  try {
    const res = await getMessages({ ...params });

    if (res?.data) {
      const { pagination, data, has_more, next_cursor } = res.data;

      return {
        data: data as Message[],
        has_more,
        next_cursor,
        pagination: pagination as Pagination,
      };
    }

    return null;
  } catch (err) {
    return null;
  }
};
