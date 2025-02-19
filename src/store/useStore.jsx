import { create } from "zustand";

export const usePageStore = create((set) => ({
  heroImgRect: null,
  aboutMeImgRect: null,

  getHeroImgBoundingClientRect: (elementRef) => {
    if (elementRef.current) {
      set({ heroImgRect: elementRef.current.getBoundingClientRect() });
    }
  },
  getAboutMeImgBoundingClientRect: (elementRef) => {
    if (elementRef.current) {
      set({ aboutMeImgRect: elementRef.current.getBoundingClientRect() });
    }
  },
}));
