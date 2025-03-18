// src/main.jsx
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createMuiTheme } from "./theme/theme";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sccs/main.scss"; // Import named export

const theme = createMuiTheme({ theme: "light", responsiveFontSizes: true });

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  // </React.StrictMode>
);
