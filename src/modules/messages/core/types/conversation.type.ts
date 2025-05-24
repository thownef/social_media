import { FileImage } from "@/shared/core/types";

export type Participant = {
  id: string;
  name: string;
  avatar: FileImage | null;
};

export type Conversation = {
  id: number;
  isGroup: boolean;
  groupId: number | null;
  userId?: number;
  name: string;
  avatar: FileImage | null;
  isOnline: boolean;
  lastMessage: string;
  lastMessageAt: string;
  participant: Participant;
  createdAt: string;
  updatedAt: string;
};
