import { Avatar } from "@heroui/react";
import { faker } from "@faker-js/faker";
import { Conversation } from "@/modules/messages/core/types/conversation.type";
import dayjs from "dayjs";
import { memo } from "react";

type ConversationCardProps = {
  conversation: Conversation;
  isSelected?: boolean;
  isOnline?: boolean;
  onClick?: () => void;
};

const ConversationCard = memo(
  ({ conversation, isSelected = false, isOnline = false, onClick }: ConversationCardProps) => {
    return (
      <div onClick={onClick} className={`cursor-pointer px-4 py-3 ${isSelected ? "bg-indigo-50" : "hover:bg-gray-50"}`}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar src={conversation.avatar?.link || faker.image.avatar()} className="h-10 w-10" />
            {isOnline && <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-blue-600 border-2 border-white"></div>}
          </div>
          <div className="flex-1 flex flex-col gap-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{conversation.name}</h3>
              <span className="text-xs text-gray-500">{dayjs(conversation.lastMessageAt).format("h:mm A")}</span>
            </div>
            <span className="text-sm text-gray-600 truncate block">{conversation.lastMessage}</span>
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.conversation.id === nextProps.conversation.id &&
      prevProps.isSelected === nextProps.isSelected &&
      prevProps.isOnline === nextProps.isOnline
    );
  }
);

ConversationCard.displayName = "ConversationCard";

export default ConversationCard;
