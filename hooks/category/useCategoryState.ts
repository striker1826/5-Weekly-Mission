import { create } from "zustand";

interface CategoryState {
  categoryId: number;
  setCategoryId: (categoryId: number | null) => void;
}

export const useCategoryState = create<CategoryState>((set) => ({
  categoryId: 0,
  setCategoryId: (categoryId: number | null) =>
    set({ categoryId: categoryId ?? 0 }),
}));
