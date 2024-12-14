import { useEffect } from "react";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import _ from "lodash";
import { ModuleName, PageName, PagePath } from "@/shared/core/enum/page.enum";
import { lazyLoadModuleRoute, lazyLoadRoute } from "@/routes/LazyLoadRoutes";
import ValidateLoginRoute from "@/routes/ValidateLoginRoute";
import PrivateRoute from "@/routes/PrivateRoute";
import Layout from "@/shared/layouts";
import RoleRoute from "@/routes/RoleRoute";
import { Roles } from "@/shared/core/enum/role.enum";
import { groupsRoute } from "@/routes/modules";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useAppHooks";
import { setUser } from "@/shared/store/authSlice";
import { getProfile } from "@/shared/services/auth.service";

const configRoutes: RouteObject[] = [
  {
    path: PagePath.AUTH,
    element: <ValidateLoginRoute>{lazyLoadModuleRoute(ModuleName.AUTH, PageName.AUTH)}</ValidateLoginRoute>,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <RoleRoute roles={[Roles.USER]}>{lazyLoadModuleRoute(ModuleName.HOME, PageName.HOME)}</RoleRoute>,
      },
      ...groupsRoute,
    ],
  },
  {
    path: "*",
    element: lazyLoadRoute("NotFound"),
  },
];

export const router = createBrowserRouter(configRoutes);

const RoutesApp = () => {
  const dispatch = useAppDispatch();
  const authProfileStore = useAppSelector((state) => state.user.user);
  const isAuthenticated = localStorage.getItem("bearer_token");

  useEffect(() => {
    (async () => {
      if (isAuthenticated && !authProfileStore) {
        try {
          const profileResponse = await getProfile();
          const profileData = profileResponse?.data?.data || {};

          if (_.isEmpty(profileData)) {
            localStorage.removeItem("bearer_token");
          } else {
            dispatch(setUser(profileData));
          }
        } catch (error) {}
      }
    })();
  }, []);

  return <RouterProvider router={router} />;
};

export default RoutesApp;
