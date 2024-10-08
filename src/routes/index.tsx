import { isEmpty } from "lodash";
import { createBrowserRouter, RouteObject, RouterProvider, useRoutes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import { ModuleName, PageName, PagePath } from "@/shared/core/enum/page.enum";
import { lazyLoadModuleRoute, lazyLoadRoute } from "@/routes/LazyLoadRoutes";
import ValidateLoginRoute from "@/routes/ValidateLoginRoute";
import PrivateRoute from "@/routes/PrivateRoute";
import { RootState } from "@/shared/store";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/useAppHooks";
import { setUser } from "@/shared/store/authSlice";
import Layout from "@/shared/layouts";

const NavigateComponent = lazy(() => import("@/shared/components/Navigate/Navigate"));

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
        element: (
          <Suspense fallback="loading...">
            <NavigateComponent />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: lazyLoadRoute("NotFound"),
  },
];

const RoutesApp = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state: RootState) => state.user);
  const isAuthenticated = localStorage.getItem("bearer_token");
  const router = createBrowserRouter(configRoutes);

  useEffect(() => {
    (async () => {
      if (isAuthenticated && !profile) {
        try {
          // const res = await getProfile();
          // const profile = res?.data?.data || {};
          const profile = null;

          if (isEmpty(profile)) {
            localStorage.removeItem("bearer_token");
          } else {
            dispatch(setUser(profile));
          }
        } catch (error) {}
      }
    })();
  }, []);

  return <>
    <RouterProvider router={router} />;
  </>
};

export default RoutesApp;
