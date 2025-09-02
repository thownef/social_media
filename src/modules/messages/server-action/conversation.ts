import { Conversation } from "@/modules/messages/core/types/conversation.type";
import { getConversations } from "@/modules/messages/services/convervation.service";
import { Pagination } from "@/shared/core/types/common.type";

export const fetchConversationList = async (params: { [key: string]: any }) => {
  try {
    const res = await getConversations(params);

    if (res?.data) {
      const { pagination, data } = res.data;

      return {
        data: data as Conversation[],
        pagination: pagination as Pagination,
      };
    }

    return null;
  } catch (err) {
    return null;
  }
};
