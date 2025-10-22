export const GLOBAL_THEME = {
  colors: {
    // primary: "#1a1a1aff",
    primary: "#f9fafa",
    // secondary: "#e5e3ff",
    secondary: "#2b2c2e",
  },
  fontSizes: {
    h1: "clamp(2rem, 16vw, 8rem)",
    h2: "clamp(1.2rem, 3vw + 0.3rem, 3rem)",
    paragraph: "clamp(0.9rem, 1.5vw, 2rem)",
  },
  lineHeights: {
    h1: 1.1,
    h2: 1.3,
    paragraph: 1.6,
  },
  margins: {
    h1: "0.56rem",
    h2: "4rem",
    paragraph: "2rem",
  },
  lettersSpacing: {
    h1: "0.02em",
    h2: "0.015em",
    paragraph: "0.05em",
  },
};

export const DEVICE = {
  // MOBILE DEVICES
  ["360"]: `(max-width: ${360}px)`,
  ["375"]: `(max-width: ${375}px)`,
  ["390"]: `(min-width: ${390}px)`,
  // ['393']: `(min-width: ${393}px)`, pixel 6a w chrome//
  ["412"]: `(min-width: ${412}px)`,
  ["430"]: `(min-width: ${430}px)`,

  // TABLET DEVICES
  ["768"]: `(min-width: ${768}px)`,
  ["820"]: `(min-width: ${820}px)`,
  ["1024"]: `(min-width: ${1024}px)`,

  // LAPTOP DEVICES
  ["1366"]: `(min-width: ${1366}px)`,
  // ["1440"]: `(min-width: ${1440}px)`,
  ["1728"]: `(min-width: ${1728}px)`,
  ["1920"]: `(min-width: ${1920}px)`,
};
