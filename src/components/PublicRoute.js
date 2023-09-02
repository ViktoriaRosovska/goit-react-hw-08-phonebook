import { Navigate, Outlet } from 'react-router-dom';
export const PublicRoute = ({
  children,
  isLoggedIn,

  redirectTo,
}) => {
  if (isLoggedIn) return <Navigate to={redirectTo} />;

  return children ? children : <Outlet />;
};
