import { create } from "zustand";

const useCategoryStore = create((set) => {
  return {
    categories: [],
    activeCategory: "All",
    setCategory: (newCategory) => {
      set({ categories: newCategory });
    },
    addCategory: (newCategory) =>
      set((oldState) => ({
        categories: [...oldState.categories, newCategory],
      })),
    selectCategory: (newCategory) => set({ activeCategory: newCategory }),
  };
});

export default useCategoryStore;
