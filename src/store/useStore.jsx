import { create } from "zustand";

export const usePageStore = create((set) => ({
  getMeshPosition: null,
  setGetMeshPosition: (rect) => set({ getMeshPosition: rect }),
  isMenuOpen: false,
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
}));
