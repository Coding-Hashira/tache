import { create } from "zustand";

type AddTagsModalStore = {
  isOpen: boolean;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  open: () => void;
  close: () => void;
};

export const useAddTagsModal = create<AddTagsModalStore>((set) => ({
  isOpen: false,
  isLoading: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));
