import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, isRefreshing, children, redirectTo }) => {
  if (!isLoggedIn && !isRefreshing) return <Navigate to={redirectTo} />;

  return children ? children : <Outlet />;
};

export default PrivateRoute;
