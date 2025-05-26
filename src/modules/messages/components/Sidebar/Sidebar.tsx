import Conversation from "@/modules/messages/components/Conversation/Conversation";
import Navigation from "@/modules/messages/components/Navigation/Navigation";
import { type Conversation as ConversationType } from "@/modules/messages/core/types/conversation.type";

type SidebarProps = {
  conversations: ConversationType[];
  onlineUsers: Set<number>;
  selectedConversation: ConversationType | null;
  onSelectConversation: (conversation: ConversationType) => () => void;
};

const Sidebar = ({ conversations, onlineUsers, selectedConversation, onSelectConversation }: SidebarProps) => {
  return (
    <div className="flex h-full">
      <Navigation />
      <Conversation
        conversations={conversations}
        onlineUsers={onlineUsers}
        selectedConversation={selectedConversation}
        onSelectConversation={onSelectConversation}
      />
    </div>
  );
};

export default Sidebar;
