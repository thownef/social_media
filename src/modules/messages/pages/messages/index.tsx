import { echo } from "@/shared/utils/echo";
import { useEffect } from "react";

const MessagesPage = () => {
  useEffect(() => {
    echo.join('online')
      .here((users: any) => {
        console.log("here", users);
      })
      .joining((user: any) => {
        console.log("joining", user);
      })
      .leaving((user: any) => {
        console.log("leaving", user);
      })
      .error((error: any) => {
        console.log("error", error);
      });
  }, []);

  return <div>MessagePage</div>;
};

export default MessagesPage;
