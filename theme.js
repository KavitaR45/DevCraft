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
      fontSize: "2.8rem",
      color: colorVar,
      lineHeight: "3.4rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2rem",
      lineHeight: "2.8rem",
      color: colorVar,
      fontWeight: "bold",
      padding:"15px 0"
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight: "2.5rem",
      color: colorVar,
      fontWeight: "bold",
    },
    p: {
      fontSize: "1.18rem",
      lineHeight: "2rem",
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
