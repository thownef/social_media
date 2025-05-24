import Navigation from "@/modules/messages/components/Navigation/Navigation";
import Conversation from "@/modules/messages/components/Conversation/Conversation";
import { type Conversation as ConversationType } from "@/modules/messages/core/types/conversation.type";

type SidebarProps = {
  conversations: ConversationType[];
  onlineUsers: Set<number>;
};

const Sidebar = ({ conversations, onlineUsers }: SidebarProps) => {
  return (
    <div className="flex h-full">
      <Navigation />
      <Conversation conversations={conversations} onlineUsers={onlineUsers} />
    </div>
  );
};

export default Sidebar;
