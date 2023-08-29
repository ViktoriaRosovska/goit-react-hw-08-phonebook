import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';
import { PublicRoute } from './PublicRoute';
import PrivateRoute from './PrivateRout';
import Phonebook from 'pages/Phonebook';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const HomePage = lazy(() => import('../pages/Home'));
const SignUpPage = lazy(() => import('../pages/SignUp'));
const SignInPage = lazy(() => import('../pages/SignIn'));
export function App() {
  const isAuth = useSelector(selectIsLoggedIn);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route element={<PublicRoute isVisible={isAuth} redirectTo="/" />}>
          <Route path="signIn" element={<SignInPage />} />
          <Route path="signUp" element={<SignUpPage />} />
        </Route>
        <Route
          element={<PrivateRoute isVisible={isAuth} redirectTo="/signUp" />}
        >
          <Route path="contacts" element={<Phonebook />} />
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  );
}
