import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6DA305",
      dark: "#416103",
    },
    secondary: {
      main: "#ab0f15",
      light: "#ffffff",
      dark: "#000000"
    },
  },
  typography: {
    h6: {
      fontSize: 16,
    },
  },
});

export default theme;
