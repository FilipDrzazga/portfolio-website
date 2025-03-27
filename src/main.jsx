import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./styles/global.jsx";
import { ThemeProvider } from "styled-components";
import { GLOBAL_THEME } from "./styles/theme";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={GLOBAL_THEME}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
