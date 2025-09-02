import { Message } from "@/modules/messages/core/types/message.type";
import { getMessages } from "@/modules/messages/services/message.service";
import { Pagination } from "@/shared/core/types/common.type";
import { camelizeKeys } from "humps";

export const fetchMessageList = async (params: { [key: string]: any }) => {
  try {
    const res = await getMessages(params);

    if (res?.data) {
      const { pagination, data, ...rest } = res.data;
      const { hasMore, nextCursor } = camelizeKeys(rest);

      return {
        data: data as Message[],
        hasMore,
        nextCursor,
        pagination: pagination as Pagination,
      };
    }

    return null;
  } catch (err) {
    return null;
  }
};
