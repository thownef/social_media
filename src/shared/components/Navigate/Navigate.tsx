import { Navigate, useLocation } from "react-router-dom";

import { RootState } from "@/shared/store";
import { navigateWithRole } from "@/shared/utils";
import { useAppSelector } from "@/shared/hooks/useAppHooks";
import { PagePath } from "@/shared/core/enum";

const NavigateComponent = () => {
  const location = useLocation();
  const user = useAppSelector((state: RootState) => state.user.user);

  if (!user || location.pathname === PagePath.HOME) return;

  const path = navigateWithRole(user.role);

  return <Navigate state={{ from: location }} to={path} />;
};

export default NavigateComponent;
