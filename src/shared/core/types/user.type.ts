import { type Roles } from "@/shared/core/enum/role.enum";
import { FileImage } from "@/shared/core/types/common.type";

export type User = {
  id: number;
  email: string;
  phone: string;
  role: Roles;
  profile: Profile;
  createdAt: string;
};

export type Profile = {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  gender: number;
  dateOfBirth: string;
  location: string | null;
  biography: string | null;
  avatar: FileImage | null;
  cover: FileImage | null;
};
