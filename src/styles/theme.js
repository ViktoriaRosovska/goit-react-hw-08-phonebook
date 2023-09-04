import { createTheme } from '@mui/material/styles';

export const createThemeTemplate = themeColor => ({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: '100vh',
          color: themeColor === 'light' ? 'black' : 'white',
          backgroundColor: themeColor === 'light' ? 'white' : 'black',
        },
        a: {
          color: themeColor === 'light' ? '#f26b94' : '#1976d2',
          '&:hover': {
            color: themeColor === 'light' ? 'black' : 'white',
          },
          '&.active': {
            color: themeColor === 'light' ? 'black' : 'white',
          },
        },
      },
    },
  },
  mixins: {
    toolbar: {
      backgroundColor: 'transparent',
    },
  },
  palette: {
    bg: themeColor === 'light' ? 'pink' : 'darkblue',
    hover: themeColor === 'light' ? 'white' : 'black',
    color: themeColor === 'light' ? '#f26b94' : '#1976d2',
  },
  buttonColor: {
    hover: themeColor === 'light' ? 'white' : 'black',
    backgroundColor: themeColor === 'light' ? '#f26b94' : '#1976d2',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 834,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const lightTheme = createTheme(createThemeTemplate('light'));

export const darkTheme = createTheme(createThemeTemplate('dark'));
