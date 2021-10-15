import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  spacing: 12,
  palette: {
    primary: {
      light: '#F2F2F2',
      main: '#FF6495',
      dark: '#52b69a',
    },
    secondary: {
      main: '#ffffff',
      light: '#ff9100',
      dark: '#7431C9',
    },
    text: {
      primary: '#1E1E1E',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'verdana', 'sans-serif'",
    fontSize: 14,
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.7rem',
    },
  },
});

export default theme;
