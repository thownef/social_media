import { FileImage } from "@/shared/core/types/common.type";

export type Post = {
  id: number;
  userId: number;
  content: string;
  isPublic: number;
  createdAt: string;
  updatedAt: string;
  files: FileImage[];
  createdBy: {
    id: number;
    firstName: string;
    lastName: string;
    avatar: FileImage;
  };
};

export type PostForm = {
  id?: number;
  content: string;
  files: FileImage[];
};

