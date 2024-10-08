import { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("bearer_token") || true;

  if (!isAuthenticated) {
    return <Navigate state={{ from: location }} to="/login" />;
  } else if (children) {
    return <>{children}</>;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
