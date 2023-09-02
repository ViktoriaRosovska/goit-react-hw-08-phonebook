import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/operations';

export const Layout = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            {!isLoggedIn && <NavLink to="/signIn">Login</NavLink>}
            {!isLoggedIn && <NavLink to="/signUp">Registration</NavLink>}
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
          </nav>
          {isLoggedIn && (
            <div>
              <p>{user.email}</p>
              <button onClick={handleClick}>Logout</button>
            </div>
          )}
        </header>

        <Outlet />
      </Suspense>
    </>
  );
};
