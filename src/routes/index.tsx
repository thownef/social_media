import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import _ from "lodash";
import { ModuleName, PageName, PagePath } from "@/shared/core/enum/page.enum";
import { lazyLoadModuleRoute, lazyLoadRoute } from "@/routes/LazyLoadRoutes";
import ValidateLoginRoute from "@/routes/ValidateLoginRoute";
import PrivateRoute from "@/routes/PrivateRoute";
import { groupsRoute, messagesRoute } from "@/routes/modules";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/useAppHooks";
import { setUser } from "@/shared/store/authSlice";
import { getProfile } from "@/shared/services/auth.service";
import { RootLayout, MessagesLayout } from "@/shared/layouts";
const NavigateComponent = lazy(() => import("@/shared/components/Navigate/Navigate"));

const configRoutes: RouteObject[] = [
  {
    path: PagePath.AUTH,
    element: <ValidateLoginRoute>{lazyLoadModuleRoute(ModuleName.AUTH, PageName.AUTH)}</ValidateLoginRoute>,
  },
  {
    path: PagePath.REGISTER,
    element: <ValidateLoginRoute>{lazyLoadModuleRoute(ModuleName.AUTH, PageName.REGISTER)}</ValidateLoginRoute>,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="loading...">
            <NavigateComponent />
          </Suspense>
        ),
      },
      ...groupsRoute,
    ],
  },
  {
    path: PagePath.MESSAGES,
    element: (
      <PrivateRoute>
        <MessagesLayout />
      </PrivateRoute>
    ),
    children: [...messagesRoute]
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
  const isAuthenticated = localStorage.getItem("accessToken");

  useEffect(() => {
    (async () => {
      if (isAuthenticated && !authProfileStore) {
        try {
          const profileResponse = await getProfile();
          const profileData = profileResponse?.data?.data || {};

          if (_.isEmpty(profileData)) {
            localStorage.removeItem("accessToken");
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
