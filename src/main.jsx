import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./styles/global.jsx";
import { ThemeProvider } from "styled-components";
import { globalTheme } from "./styles/theme";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={globalTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
