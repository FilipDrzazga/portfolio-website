export const GLOBAL_THEME = {
  colors: {
    primary: "#1e1e1e",
  },
  fontSizes: {
    xs: "clamp(0.65rem, 0.9vw, 0.95rem)",
    sm: "clamp(0.75rem, 1.2vw, 1.1rem)",
    md: "clamp(0.9rem, 1.5vw, 1.5rem)",
    lg: "clamp(1.2rem, 2vw, 2rem)",
    xl: "clamp(1.5rem, 3vw, 2.5rem)",
    xxl: "clamp(3rem, 4vw, 3rem)",
    ipad: "clamp(5rem, 5vw, 5rem)",
  },
  spacing: {
    pagePadding: "clamp(1rem, 3vw, 4rem)",
    xs: "clamp(0.5rem, 0.8vw, 1rem)",
    sm: "clamp(1rem, 1.2vw, 1.5rem)",
    md: "clamp(1.5rem, 2vw, 2.5rem)",
    lg: "clamp(2rem, 3vw, 3rem)",
    xl: "clamp(3rem, 4vw, 4rem)",
    xxl: "clamp(4rem, 5vw, 5rem)",
    xxxl: "clamp(7rem, 6vw, 8rem)",
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
};
