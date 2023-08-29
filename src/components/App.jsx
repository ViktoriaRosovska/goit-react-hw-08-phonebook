import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
export function App() {
  const isAuth = false;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route element={<RestrictedRoute isVisible={isAuth} redirectTo="/" />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
