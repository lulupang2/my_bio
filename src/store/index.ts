import { WorkModalProps } from "@components/common/modal/workModal";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeProps = {
  theme: boolean;
  setTheme: (theme: boolean) => void;
};
type ModalProps = {
  isModalOpen: boolean;
  toggleModal: (boolean: boolean) => void;
  data: WorkModalProps;
  setModalData: (data: WorkModalProps) => void;
};
type viewProps = {
  section: string;
  setSection: (section: string) => void;
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
const initialData: WorkModalProps = {
  id: 0,
  date: "",
  title: "",
  tags: "",
  device: "",
  members: "",
  desc: ``,
  thumb: ``,
  stack: [],
  img: [],
};

export const useModalStore = create<ModalProps>((set) => ({
  data: initialData,
  isModalOpen: false,
  toggleModal: (e) => set(() => ({ isModalOpen: e })),
  setModalData: (data) => set(() => ({ data })),
}));

export const useViewStore = create<viewProps>((set) => ({
  section: "home",
  setSection: (section) => set(() => ({ section })),
}));

export const useThemeState = () => useThemeStore((state) => state.theme);
export const useThemeActions = () => useThemeStore((state) => state.setTheme);

export const useModalState = () => useModalStore((state) => state.isModalOpen);
export const useModalActions = () =>
  useModalStore((state) => state.toggleModal);
export const useModalData = () => useModalStore((state) => state.data);
export const useModalDataActions = () =>
  useModalStore((state) => state.setModalData);
