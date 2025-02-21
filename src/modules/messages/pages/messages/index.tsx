import { useEffect, useState } from "react";
import { echo } from "@/shared/utils/echo";
import { User } from "@/shared/core/types";

const MessagesPage = () => {
  const [onlineUsers, setOnlineUsers] = useState<Record<string, User>>({});
  console.log(onlineUsers);
  useEffect(() => {
    echo.join('online')
      .here((users: any) => {
        console.log(users)
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

  return <div>MessagePage</div>;
};

export default MessagesPage;
