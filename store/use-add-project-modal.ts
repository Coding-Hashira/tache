import { create } from "zustand";

type AddProjectModalStore = {
  isOpen: boolean;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  open: () => void;
  close: () => void;
};

export const useAddProjectModal = create<AddProjectModalStore>((set) => ({
  isOpen: false,
  isLoading: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));
