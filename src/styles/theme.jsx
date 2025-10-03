export const GLOBAL_THEME = {
  colors: {
    primary: "#1e1e1e",
  },
  fontSizes: {
    small: "clamp(0.65rem, 0.9vw, 0.95rem)",
    smallPlus: "clamp(0.75rem, 1.2vw, 1.1rem)",
    medium: "clamp(0.80rem, 1.5vw, 1.5rem)",
    large: "clamp(3.5rem, 4vw, 5rem)",
  },
  spacing: {
    normal: "1rem",
    medium: "2.5rem",
    large: "3rem",
  },
};

export const DEVICE = {
  // MOBILE DEVICES
  ["360"]: `(min-width: ${360}px)`,
  ["375"]: `(min-width: ${375}px)`,
  ["390"]: `(min-width: ${390}px)`,
  // ['393']: `(min-width: ${393}px)`, pixel 6a w chrome//
  ["412"]: `(min-width: ${412}px)`,
  // ['430']: `(min-width: ${430}px)`, iphon 14 pro max w chrome//

  // TABLET DEVICES
  ["768"]: `(min-width: ${768}px)`,
};
