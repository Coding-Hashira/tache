import { create } from "zustand";

type AddTaskModalStore = {
  isOpen: boolean;
  isLoading: boolean;
  open: () => void;
  close: () => void;
  setLoading: (loading: boolean) => void;
};

export const useAddTaskModal = create<AddTaskModalStore>((set) => ({
  isOpen: false,
  isLoading: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));
