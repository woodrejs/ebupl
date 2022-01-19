import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { theme, muiTheme } from "./utils/theme";
import "./style/index.css";
import "./style/fonts.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MUIThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MUIThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
