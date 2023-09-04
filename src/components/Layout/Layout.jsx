import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';
import Toolbar from '@material-ui/core/Toolbar';
// import { Container } from 'components/App.styled';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/operations';
import { selectTheme } from 'redux/theme/selectors';
import { changeTheme } from 'redux/theme/slice';
import { darkTheme, lightTheme } from '../../styles/theme';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Switch from '@mui/material/Switch';

const useStyle = makeStyles(theme => ({
  transparentToolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& a': {
      textDecoration: 'none',
      fontSize: '30px',
      padding: '0px',
      '&.active': {
        textDecoration: 'underline',
      },
    },
  },
}));

export const Layout = () => {
  const classes = useStyle();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  const isDark = useSelector(selectTheme);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />

        <Suspense fallback={<div>Loading...</div>}>
          <Container
            disableGutters
            maxWidth="lg"
            sx={{
              width: '780px',
              height: '500px',
              marginRight: 'auto',
              marginLeft: 'auto',
              backgroundColor: theme => theme.palette.bg,
              borderRadius: '10px',

              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              mozBoxShadow:
                'rgba(50, 50, 93, 0.25) -10px -5px 0px -10px, rgba(0, 0, 0, 0.3) 2px 4px 5px -2px',
              webkitBoxShadow:
                'rgba(50, 50, 93, 0.25) -10px -5px 0px -10px, rgba(0, 0, 0, 0.3) 2px 4px 5px -2px',
              boxShadow:
                'rgba(50, 50, 93, 0.25) -10px -5px 0px -10px, rgba(0, 0, 0, 0.3) 2px 4px 5px -2px',
            }}
          >
            <AppBar
              position="static"
              sx={{
                padding: '0px',
                backgroundColor: 'transparent',
                boxShadow: 'none',
              }}
            >
              <Toolbar classes={{ root: classes.transparentToolbar }}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '40px',
                  }}
                >
                  <NavLink to="/">Home</NavLink>
                  {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
                </Box>

                <Box
                  sx={{ display: 'flex', flexDirection: 'row', gap: '20px' }}
                >
                  <Switch
                    sx={{
                      marginRight: '-10px',
                    }}
                    onClick={() => {
                      dispatch(changeTheme());
                    }}
                  />

                  {!isLoggedIn && <NavLink to="/signIn">Login</NavLink>}
                  {!isLoggedIn && <NavLink to="/signUp">Registration</NavLink>}

                  {isLoggedIn && (
                    <Box
                      sx={{
                        color: theme => theme.palette.color,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '20px',
                      }}
                    >
                      <Typography>{user.email}</Typography>
                      <Button
                        variant="buttonColor"
                        sx={{
                          backgroundColor: 'white',
                          color: theme => theme.palette.color,
                          height: '30px',
                          ':hover': {
                            color: theme => theme.buttonColor.hover,
                            backgroundColor: theme =>
                              theme.buttonColor.backgroundColor,
                          },
                        }}
                        onClick={handleClick}
                      >
                        Logout
                      </Button>
                    </Box>
                  )}
                </Box>
              </Toolbar>
            </AppBar>
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                gap: '50px',
                justifyContent: 'center',
              }}
            >
              <Outlet />
            </Container>
          </Container>
        </Suspense>
      </ThemeProvider>
    </>
  );
};
