import { create } from "zustand";

export const usePageStore = create((set) => ({
  isCanvasLoaded: false,
  setIsCanvasLoaded: (isLoaded) => {
    set({ isCanvasLoaded: isLoaded });
  },
}));
