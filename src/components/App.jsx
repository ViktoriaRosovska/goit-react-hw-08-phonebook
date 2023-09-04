import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { PublicRoute } from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Phonebook from '../pages/Phonebook';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/authSelectors';
import { refreshUser } from '../redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const SignUpPage = lazy(() => import('../pages/SignUp'));
const SignInPage = lazy(() => import('../pages/SignIn'));
export function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Navigate to={location} />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            element={
              <PublicRoute isLoggedIn={isLoggedIn} redirectTo="contacts" />
            }
          >
            <Route path="signIn" element={<SignInPage />} />
            <Route path="signUp" element={<SignUpPage />} />
          </Route>
          <Route
            element={
              <PrivateRoute
                isLoggedIn={isLoggedIn}
                isRefreshing={isRefreshing}
                redirectTo="/"
              />
            }
          >
            <Route path="contacts" element={<Phonebook />} />
          </Route>

          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </>
  );
}
