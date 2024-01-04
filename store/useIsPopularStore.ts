import { create } from 'zustand';

interface IsPopularStore {
  isPopular: boolean;
  setIsPopular: (isPopular: boolean) => void;
}

export const useIsPopularStore = create<IsPopularStore>((set) => ({
  isPopular: false,
  setIsPopular: (isPopular: boolean) => set({ isPopular }),
}));
