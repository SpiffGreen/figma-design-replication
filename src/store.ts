import { create } from "zustand";

interface AppState {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));
