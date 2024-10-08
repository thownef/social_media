import { type Roles } from "@/shared/core/enum/role.enum";

export type User = {
  id: number;
  userName: string;
  email: string;
  role: Roles;
  createdAt: string;
};

export type Profile = {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  bio: string;
  birthday: Date;
  gender: string;
  location: string;
  createdAt: string;
};
