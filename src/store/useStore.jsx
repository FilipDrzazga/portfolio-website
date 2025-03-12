import { create } from "zustand";

export const usePageStore = create((set) => ({
  isCanvasLoaded: false,
  isWebVisited: false,
  setIsCanvasLoaded: (isLoaded) => {
    console.log("isLoaded", isLoaded);
    set({ isCanvasLoaded: isLoaded });
  },
}));
