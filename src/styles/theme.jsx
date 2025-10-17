export const GLOBAL_THEME = {
  colors: {
    primary: "#1e1e1e",
    secondary: "#e5e3ff",
  },
  fontSizes: {
    h1: "clamp(1.7rem, 5vw + 0.5rem, 3rem)",
    h1Special: "clamp(2rem, 18vw, 10rem)",
    h2: "clamp(0.84rem, 3vw + 0.3rem, 1.5rem)",
    paragraph: "clamp(1rem, 1.5vw + 0.2rem, 2rem)",
  },
  lineHeights: {
    h1: 1.1,
    h2: 1.3,
    paragraph: 1.6,
  },
  margins: {
    h1: "0.56rem",
    h2: "1rem",
    paragraph: "1rem",
  },
  lettersSpacing: {
    h1: "0.02em",
    h2: "0.015em",
    paragraph: "0.05em",
  },
};

export const DEVICE = {
  // MOBILE DEVICES
  ["360"]: `(min-width: ${360}px)`,
  ["375"]: `(min-width: ${375}px)`,
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
