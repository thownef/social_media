import { lazyLoadModuleRoute, lazyLoadRoute } from "@/routes/LazyLoadRoutes";
import RoleRoute from "@/routes/RoleRoute";
import { ModuleName, PageName, PagePath } from "@/shared/core/enum/page.enum";
import { Roles } from "@/shared/core/enum/role.enum";

export const messagesRoute = [
  {
    path: PagePath.MESSAGES,
    element: <RoleRoute roles={[Roles.USER]}>{lazyLoadRoute("Base")}</RoleRoute>,
    children: [
      {
        path: "",
        element: <RoleRoute roles={[Roles.USER]}>{lazyLoadModuleRoute(ModuleName.MESSAGES, PageName.MESSAGES)}</RoleRoute>,
      },
    ],
  },
];
