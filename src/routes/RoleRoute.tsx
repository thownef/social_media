import { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { User } from "@/shared/core/types/user.type";
import { Roles } from "@/shared/core/enum/role.enum";
import { useAppSelector } from "@/shared/hooks/useAppHooks";

type Props = {
  children?: ReactNode;
  roles: Roles[];
};

const RoleRoute = ({ children, roles }: Props) => {
  const location = useLocation();
  const user: User = useAppSelector((state) => state.user.user) as User;

  if (!user) {
    return;
  }

  if (!roles.includes(user.role)) {
    return <Navigate state={{ from: location }} to="/not-found" />;
  } else if (children) {
    return <>{children}</>;
  } else {
    return <Outlet />;
  }
};

export default RoleRoute;
