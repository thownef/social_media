import { FileImage } from "@/shared/core/types";

export type Message = {
  id: number;
  userId: number;
  conversationId: number;
  message: string;
  name: string;
  avatar: FileImage | null;
  createdAt: string;
  updatedAt: string;
  isLoading?: boolean;
};
