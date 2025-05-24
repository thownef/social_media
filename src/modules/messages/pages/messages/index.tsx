import { useEffect, useState } from "react";
import { echo } from "@/shared/utils/echo";
import Sidebar from "@/modules/messages/components/Sidebar/Sidebar";
import ChatMessages from "@/modules/messages/components/ChatMessages/ChatMessages";
import ChatDetail from "@/modules/messages/components/ChatDetail/ChatDetail";
import { Conversation } from "@/modules/messages/core/types/conversation.type";
import useFetchDataTable from "@/shared/hooks/useFetchDataTable";
import { fetchConversationList } from "@/modules/messages/server-action/conversation";
import { User } from "@/shared/core/types";
const MessagesPage = () => {
  const { dataTable, onSetDataTable, onFetch } = useFetchDataTable<Conversation>(fetchConversationList);
  const [onlineUsers, setOnlineUsers] = useState<Set<number>>(new Set());
  useEffect(() => {
    onFetch({ page: 1 });
  }, []);

  useEffect(() => {
    echo
      .join("online")
      .here((users: User[]) => {
        setOnlineUsers(new Set(users.map((user) => user.id)));
      })
      .joining((user: User) => {
        setOnlineUsers((prev) => new Set([...prev, user.id]));
      })
      .leaving((user: User) => {
        setOnlineUsers((prev) => {
          const next = new Set(prev);
          next.delete(user.id);
          return next;
        });
      })
      .error((error: any) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="flex h-screen max-h-screen overflow-hidden">
      <Sidebar conversations={dataTable} onlineUsers={onlineUsers} />
      <ChatMessages />
      <ChatDetail />
    </div>
  );
};

export default MessagesPage;
