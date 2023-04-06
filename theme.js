import { createTheme } from '@material-ui/core/styles';
const colorVar='#000'
const theme = createTheme({
  palette: {
    primary: {
      dark: "#26A4FF",
      light: "#F8F8FE",
      main: '#091FF7',
    },
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      color: colorVar,
      lineHeight: "2.8rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.8rem",
      lineHeight: "2.5rem",
      color: colorVar,
      fontWeight: "bold",
      padding:"15px 0"
    },
    h3: {
      fontSize: "1.3rem",
      lineHeight: "1.8rem",
      color: colorVar,
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1.2rem",
      lineHeight: "1.5rem",
      color: colorVar,
      fontWeight: "bold",
    },
    p: {
      fontSize: "1rem",
      lineHeight: "1.8rem",
      margin:"10px 0",
      color: colorVar,
    },
  },
  button: {
    primary: {
       borderRadius: "50px", padding: "10px 30px",fontWeight:"bold",margin:"10px 0 10px 0"
    },
    ghost: {
      background: `#fff`, color: 'black', borderRadius: "50px", padding: "10px 30px"
    }
  }
});

export default theme;
