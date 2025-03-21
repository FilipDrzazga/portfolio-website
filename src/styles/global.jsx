import { createGlobalStyle } from "styled-components";
import OswaldLight from "../assets/font/Oswald-Light.woff2";
import OswaldRegular from "../assets/font/Oswald-Regular.woff2";
import OswaldMedium from "../assets/font/Oswald-Medium.woff2";
import OswaldBold from "../assets/font/Oswald-Bold.woff2";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Oswald-light";
  src: url(${OswaldLight}) format("woff2");
}
@font-face {
  font-family: "Oswald-regular";
  src: url(${OswaldRegular}) format("woff2");
}
@font-face {
  font-family: "Oswald-medium";
  src: url(${OswaldMedium}) format("woff2");
}
@font-face {
  font-family: "Oswald-bold";
  src: url(${OswaldBold}) format("woff2");
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}
`;

export default GlobalStyle;