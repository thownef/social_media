import { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

const ValidateLoginRoute = ({ children }: Props) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("bearer_token");

  if (!isAuthenticated) {
    return <Navigate state={{ from: location }} to="/" />;
  } else if (children) {
    return <>{children}</>;
  } else {
    return <Outlet />;
  }
};

export default ValidateLoginRoute;
