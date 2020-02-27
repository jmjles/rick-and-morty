import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  StylesProvider,
  CssBaseline,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core";
import {BrowserRouter as Router} from 'react-router-dom'
const theme = createMuiTheme({});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <StylesProvider injectFirst>
        <Router>
          <App />
        </Router>
      </StylesProvider>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById("root")
);
