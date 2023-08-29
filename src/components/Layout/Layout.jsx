import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signIn">Login</NavLink>
            <NavLink to="/signUp">Registration</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </nav>
        </header>

        <Outlet />
      </Suspense>
    </>
  );
};
