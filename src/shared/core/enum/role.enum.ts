import { EnumTypeName } from "@/shared/core/types/common.type";

export enum Roles {
  USER = 1,
}

export const RoleEnumUsingName: EnumTypeName = {
  [Roles.USER]: "User",
};
