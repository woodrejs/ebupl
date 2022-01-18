import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { theme, muiTheme } from "./utils/theme";
import "./style/index.css";
import "./style/fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <MUIThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MUIThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
