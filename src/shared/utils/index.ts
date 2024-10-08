import { PagePath } from "@/shared/core/enum";
import { Roles } from "@/shared/core/enum/role.enum";

export const navigateWithRole = (role: Roles) => {
  switch (role) {
    case Roles.USER:
      return PagePath.HOME;
  }
};