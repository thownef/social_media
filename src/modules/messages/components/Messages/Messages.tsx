import { useEffect, useRef, useCallback } from "react";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { Conversation } from "@/modules/messages/core/types/conversation.type";
import { Message } from "@/modules/messages/core/types/message.type";
import { fetchMessageList } from "@/modules/messages/server-action/message";
import { queryClient } from "@/shared/lib/queryClient";
import { transformQueryParams } from "@/shared/utils";
import { echo } from "@/shared/utils/echo";

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
          conversationId: conversation.id,
          ...(typeof pageParam !== "undefined" && { cursor: pageParam }),
        })
      ),
    getNextPageParam: (lastPage) => {
      return lastPage?.hasMore ? lastPage.nextCursor : undefined;
    },
    initialPageParam: undefined,
  });

  const handleNewMessage = useCallback(
    (data: Message) => {
      queryClient.setQueryData(["messages", conversation.id], (oldData: any) => {
        if (!oldData) return oldData;

        const messageExists = oldData.pages.some((page: any) => page.data.some((msg: Message) => msg.id === data.id));

        if (messageExists) return oldData;

        return {
          ...oldData,
          pages: [
            {
              ...oldData.pages[0],
              data: [data, ...oldData.pages[0].data],
            },
            ...oldData.pages.slice(1),
          ],
        };
      });

      queryClient.invalidateQueries({
        queryKey: ["messages", conversation.id],
        refetchType: "none",
        exact: true,
      });
    },
    [conversation.id]
  );

  useEffect(() => {
    const messagesContainer = loadMoreRef.current?.closest(".overflow-y-auto");
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    if (conversation?.id) {
      const channel = echo.private(`conversation.${conversation.id}`);

      channel.listen(".MessageSent", handleNewMessage);

      return () => {
        channel.stopListening(".MessageSent");
        echo.leave(`conversation.${conversation.id}`);
      };
    }
  }, [conversation.id]);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const messagesContainer = loadMoreRef.current.closest(".overflow-y-auto");
    if (!messagesContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: messagesContainer,
        threshold: 0.1,
        rootMargin: "100px 0px 0px 0px",
      }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <>
      {pages.map((page, i) =>
        page?.data.map((message: Message) => (
          <div key={message.id} className={`max-w-xs mb-3 ${Number(message.userId) === Number(conversation.userId) ? "" : "ml-auto"}`}>
            <div
              className={`text-sm rounded-2xl px-4 py-2 break-words ${
                message.userId === conversation.userId ? "bg-gray-200 text-gray-900" : "bg-blue-600 text-white"
              }`}
            >
              {message.message}
            </div>
          </div>
        ))
      )}
      <div ref={loadMoreRef} className="h-4 w-full" />
    </>
  );
};

export default Messages;
