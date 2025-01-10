import { FileImage } from "@/shared/core/types/common.type";

export type Post = {
  id: number;
  userId: number;
  content: string;
  isPublic: number;
  createdAt: string;
  updatedAt: string;
  file: FileImage[];
  createdBy: {
    id: number;
    firstName: string;
    lastName: string;
    avatar: FileImage;
  };
};
