import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeProps = {
  theme: boolean;
  setTheme: (theme: boolean) => void;
};
type ModalProps = {
  isModalOpen: boolean;
  toggleModal: (boolean: boolean) => void;
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

export const useModalStore = create<ModalProps>((set) => ({
  isModalOpen: false,
  toggleModal: (e) => set(() => ({ isModalOpen: e })),
}));

export const useThemeState = () => useThemeStore((state) => state.theme);
export const useThemeActions = () => useThemeStore((state) => state.setTheme);

export const useModalState = () => useModalStore((state) => state.isModalOpen);
export const useModalActions = () =>
  useModalStore((state) => state.toggleModal);
