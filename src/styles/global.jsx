import { createGlobalStyle } from "styled-components";

import JetBrainsMonoLight from "../assets/font/JetBrainsMono-Light.woff2";
import JetBrainsMonoRegular from "../assets/font/JetBrainsMono-Regular.woff2";
import JetBrainsMonoMedium from "../assets/font/JetBrainsMono-Medium.woff2";
import JetBrainsMonoBold from "../assets/font/JetBrainsMono-Bold.woff2";
import JetBrainsMonoExtraBold from "../assets/font/JetBrainsMono-ExtraBold.woff2";
import InterRegular from "../assets/font/Inter-Regular.woff2";
import InterBold from "../assets/font/Inter-Bold.woff2";
import InterExtraBold from "../assets/font/Inter-ExtraBold.woff2";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "JetBrainsMonoLight";
  src: url(${JetBrainsMonoLight}) format("woff2");
}
@font-face {
  font-family: "JetBrainsMonoRegular";
  src: url(${JetBrainsMonoRegular}) format("woff2");
}
@font-face {
  font-family: "JetBrainsMonoMedium";
  src: url(${JetBrainsMonoMedium}) format("woff2");
}
@font-face {
  font-family: "JetBrainsMonoBold";
  src: url(${JetBrainsMonoBold}) format("woff2");
}
@font-face {
  font-family: "JetBrainsMonoExtraBold";
  src: url(${JetBrainsMonoExtraBold}) format("woff2");
}
@font-face {
  font-family: "InterRegular";
  src: url(${InterRegular}) format("woff2");
}
@font-face {
  font-family: "InterBold";
  src: url(${InterBold}) format("woff2");
}
@font-face {
  font-family: "InterExtraBold";
  src: url(${InterExtraBold}) format("woff2");
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color:rgb(199, 19, 19);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}
`;

export default GlobalStyle;
