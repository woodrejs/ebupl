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
    error: "red",
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
      h2: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "116.7%",
      },
      h3: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "32px",
        lineHeight: "116.7%",
      },
      h5: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "19.6px",
      },
    },

    body: {
      default: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "32.4px",
      },
      small: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "21px",
      },
    },
    subTitle: {
      default: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "21px",
        lineHeight: "140%",
      },
      small: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "140%",
      },
    },
  },
  resolutions: {
    mobile: "479px",
    tablet: "767px",
    desktop: "991px",
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 479,
      md: 767,
      lg: 991,
      xl: 1536,
    },
  },
});
