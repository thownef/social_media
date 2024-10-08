import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

import { ModuleName, PageName, PagePath } from "@/shared/core/enum/page.enum";
import { lazyLoadModuleRoute, lazyLoadRoute } from "@/routes/LazyLoadRoutes";
import ValidateLoginRoute from "@/routes/ValidateLoginRoute";
import PrivateRoute from "@/routes/PrivateRoute";

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

const router = createBrowserRouter(configRoutes);

export default router;
