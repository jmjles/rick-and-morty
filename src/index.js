import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  StylesProvider,
  CssBaseline,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core";
const theme = createMuiTheme({});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById("root")
);
