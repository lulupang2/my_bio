import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeProps = {
  theme: boolean;
  setTheme: (theme: boolean) => void;
};

export const useThemeStore = create(
  persist<ThemeProps>(
    (set) => ({
      theme: true,
      setTheme: (theme: boolean) => set({ theme }),
    }),
    {
      name: "isDark",
    }
  )
);

export const useThemeState = () => useThemeStore((state) => state.theme);
export const useThemeActions = () => useThemeStore((state) => state.setTheme);
