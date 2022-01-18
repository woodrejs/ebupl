import { createTheme } from "@mui/material/styles";

export const theme = {
  colors: {
    primary: {
      700: "#3C5185",
      500: "#5B7ABA",
      300: "#E1EBF7",
    },
    secoundary: { 700: "#FF9A00", 500: "#FFCD39", 300: "#FBDE95" },
    light: {
      700: "rgba(255,255,255,1)",
      500: "rgba(255,255,255,0.6)",
      300: "rgba(255,255,255,0.4)",
    },
    dark: {
      700: "rgba(0, 0, 0, 1)",
      500: "rgba(0, 0, 0, 0.6)",
      300: "rgba(0, 0, 0, 0.4)",
    },
    gradients: {
      700: "linear-gradient(90deg, #5B7ABA 0%, #3C5185 100%)",
      500: "linear-gradient(88.47deg, #E1EBF7 0.62%, #BED6F2 98.78%)",
    },
  },
  fonts: {
    headers: {
      h1: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "48px",
        lineHeight: "116.7%",
      },
    },

    body: {
      default: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "21px",
        lineHeight: "140%",
      },
    },
  },
};
export const muiTheme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    primary: {
      main: "#5B7ABA",
      dark: "#3C5185",
      light: "#E1EBF7",
    },
  },
});
