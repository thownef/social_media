import RoleRoute from "../RoleRoute";

import { lazyLoadModuleRoute, lazyLoadRoute } from "@/routes/LazyLoadRoutes";
import { ModuleName, PageName, PagePath } from "@/shared/core/enum/page.enum";
import { Roles } from "@/shared/core/enum/role.enum";

export const gamingsRoute = [
  {
    path: PagePath.GAMING,
    element: <RoleRoute roles={[Roles.USER]}>{lazyLoadRoute("Base")}</RoleRoute>,
    children: [
      {
        path: "",
        element: <RoleRoute roles={[Roles.USER]}>{lazyLoadModuleRoute(ModuleName.GAMING, PageName.GAMING)}</RoleRoute>,
      },
    ],
  },
];
