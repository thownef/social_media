import { Suspense, useState } from "react";
import { Avatar, Button, Input } from "@heroui/react";
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  VideoCameraIcon,
  PlusIcon,
  PhotoIcon,
  GifIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Messages from "@/modules/messages/components/Messages/Messages";
import MessageSkeleton from "@/modules/messages/components/Skeleton/MessageSkeleton";
import { Conversation } from "@/modules/messages/core/types/conversation.type";
import { sendMessage } from "@/modules/messages/services/message.service";
import { useMutation } from "@tanstack/react-query";

type ChatMessagesProps = {
  conversation: Conversation | null;
};

const ChatMessages = ({ conversation }: ChatMessagesProps) => {
  const [message, setMessage] = useState("");

  const { mutate: sendMessageMutation, isPending } = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      setMessage("");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedMessage = message.trim();
    if (!trimmedMessage || !conversation?.id) return;

    sendMessageMutation({
      conversation_id: conversation.id,
      message: trimmedMessage,
    });
  };

  if (!conversation) {
    return (
      <div className="flex flex-col flex-1 border-r border-gray-200 items-center justify-center">
        <p className="text-gray-500">Select a conversation to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 border-r border-gray-200">
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <Avatar src={conversation.avatar?.link || undefined} className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">{conversation.name}</span>
            <span className="text-gray-400 !text-sm">Offline</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button isIconOnly variant="flat" radius="full" aria-label="Search">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </Button>
          <Button isIconOnly variant="flat" radius="full" aria-label="Call">
            <PhoneIcon className="w-5 h-5" />
          </Button>
          <Button isIconOnly variant="flat" radius="full" aria-label="Video call">
            <VideoCameraIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col-reverse">
        <Suspense fallback={<MessageSkeleton />}>
          <Messages conversation={conversation} />
        </Suspense>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 p-4 border-t border-gray-200">
          <Button isIconOnly variant="flat" radius="full" size="sm" aria-label="Add">
            <PlusIcon className="w-5 h-5" />
          </Button>
          <Button isIconOnly variant="flat" radius="full" size="sm" aria-label="Add image">
            <PhotoIcon className="w-5 h-5" />
          </Button>
          <Button isIconOnly variant="flat" radius="full" size="sm" aria-label="Add GIF">
            <GifIcon className="w-5 h-5" />
          </Button>
          <Button isIconOnly variant="flat" radius="full" size="sm" aria-label="Add sticker">
            <FaceSmileIcon className="w-5 h-5" />
          </Button>

          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Aa"
            radius="full"
            className="flex-1"
            disabled={isPending}
            classNames={{
              input: "bg-gray-100",
              inputWrapper: "bg-gray-100 hover:bg-gray-100",
            }}
          />

          <Button
            type="submit"
            isIconOnly
            color="primary"
            radius="full"
            size="sm"
            aria-label="Send"
            isLoading={isPending}
            isDisabled={!message.trim()}
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatMessages;
