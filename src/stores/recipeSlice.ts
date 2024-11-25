import { StateCreator } from 'zustand';

type CategoryType = {};

export type RecipesSliceType = {
  categories: CategoryType[];
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = () => ({
  categories: [],
});
