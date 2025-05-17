import { useEffect, useState } from "react";
import { echo } from "@/shared/utils/echo";
import { User } from "@/shared/core/types";
import { Avatar, Button, Input } from "@heroui/react";
import {
  MagnifyingGlassIcon,
  VideoCameraIcon,
  PhoneIcon,
  PaperClipIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "@/modules/messages/components/Sidebar/Sidebar";
import ChatMessages from "@/modules/messages/components/ChatMessages/ChatMessages";
import ChatDetail from "@/modules/messages/components/ChatDetail/ChatDetail";

const MessagesPage = () => {
  const [onlineUsers, setOnlineUsers] = useState<Record<string, User>>({});

  useEffect(() => {
    echo
      .join("online")
      .here((users: any) => {
        console.log(users);
      })
      .joining((user: any) => {
        setOnlineUsers((prev) => ({ ...prev, [user.id]: user }));
      })
      .leaving((user: any) => {
        setOnlineUsers((prev) => {
          const newUsers = { ...prev };
          delete newUsers[user.id];
          return newUsers;
        });
      })
      .error((error: any) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="flex h-screen max-h-screen overflow-hidden">
      <Sidebar />
      <ChatMessages />
      <ChatDetail />
    </div>
  );
};

export default MessagesPage;
