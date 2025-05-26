import { Conversation } from "@/modules/messages/core/types/conversation.type";
import { Message } from "@/modules/messages/core/types/message.type";
import { fetchMessageList } from "@/modules/messages/server-action/message";
import { transformQueryParams } from "@/shared/utils";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

const Messages = ({ conversation }: { conversation: Conversation }) => {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const {
    data: { pages },
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery({
    queryKey: ["messages", conversation?.id],
    queryFn: ({ pageParam }) =>
      fetchMessageList(
        transformQueryParams({
          conversationId: conversation?.id,
          ...(typeof pageParam !== "undefined" && { cursor: pageParam }),
        })
      ),
    getNextPageParam: (lastPage) => {
      return lastPage?.has_more ? lastPage.next_cursor : undefined;
    },
    initialPageParam: undefined,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <>
      <div ref={loadMoreRef} className="h-4 w-full" />
      {pages.map((page, i) =>
        page?.data.map((message: Message) => (
          <div key={message.id} className={`max-w-xs mb-3 ${message.userId === conversation.userId ? "ml-auto" : ""}`}>
            <div
              className={`text-sm rounded-2xl px-4 py-2 break-words ${
                message.userId === conversation.userId ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"
              }`}
            >
              {message.message}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Messages;
