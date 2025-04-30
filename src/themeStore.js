import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'cardiology',
  setTheme: (theme) => set({ theme }),
}));
