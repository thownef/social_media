import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Input } from "@heroui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { type Conversation as ConversationType } from "@/modules/messages/core/types/conversation.type";
import ConversationCard from "@/modules/messages/components/Card/ConversationCard";
import { PagePath } from "@/shared/core/enum";

type ConversationProps = {
  conversations: ConversationType[];
  onlineUsers: Set<number>;
  selectedConversation: ConversationType | null;
  onSelectConversation: (conversation: ConversationType) => () => void;
};

const Conversation = memo(
  ({ conversations, onlineUsers, selectedConversation, onSelectConversation }: ConversationProps) => {
    const isOnline = useMemo(
      () => (userId?: number) => {
        return userId ? onlineUsers.has(userId) : false;
      },
      [onlineUsers]
    );

    return (
      <div className="w-80 bg-white border-r border-gray-200">
        <div className="p-4">
          <Link to={PagePath.HOME} className="flex shrink-0 items-center pr-1 gap-3 mb-4 w-fit">
            <img
              src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/J7JhcO5QIC/0i5urkrr_expires_30_days.png"}
              className="w-10 h-10 object-fill"
            />
            <span className="text-[#0C1024] !text-xl font-bold">Social</span>
          </Link>
          <Input
            type="search"
            placeholder="Search in chats"
            radius="lg"
            startContent={<MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />}
          />
        </div>

        <nav className="mt-4 overflow-y-auto h-[calc(100vh-132px)]">
          {conversations.map((conversation) => (
            <ConversationCard
              key={conversation.id}
              conversation={conversation}
              isOnline={isOnline(conversation.userId)}
              isSelected={selectedConversation?.id === conversation.id}
              onClick={onSelectConversation(conversation)}
            />
          ))}
        </nav>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.conversations === nextProps.conversations &&
      prevProps.onlineUsers === nextProps.onlineUsers &&
      prevProps.selectedConversation === nextProps.selectedConversation
    );
  }
);

Conversation.displayName = "Conversation";

export default Conversation;
