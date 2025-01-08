import { Navigate, useLocation } from "react-router-dom";

import { RootState } from "@/shared/store";
import { navigateWithRole } from "@/shared/utils";
import { useAppSelector } from "@/shared/hooks/useAppHooks";
import { PageName, ModuleName, PagePath } from "@/shared/core/enum";
import { lazyLoadModuleRoute } from "@/routes/LazyLoadRoutes";

const NavigateComponent = () => {
  const location = useLocation();
  const user = useAppSelector((state: RootState) => state.user.user);

  if (!user) return;

  if (location.pathname === PagePath.HOME) return lazyLoadModuleRoute(ModuleName.HOME, PageName.HOME);

  const path = navigateWithRole(user.role);

  return <Navigate state={{ from: location }} to={path} />;
};

export default NavigateComponent;
