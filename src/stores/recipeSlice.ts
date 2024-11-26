import { StateCreator } from 'zustand';
import { getCategories, getRecipes } from '../services/RecipeService';
import { CategoriesType, DrinksType, SearchFilter } from '../types';

export type RecipesSliceType = {
  categories: CategoriesType;
  drinks: DrinksType;
  fetchCategories: () => Promise<void>;
  searchRecipes: (SearchFilters: SearchFilter) => Promise<void>;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: { drinks: [] },
  drinks: { drinks: [] },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },
  searchRecipes: async (filters) => {
    const drinks = await getRecipes(filters);
    set({ drinks });
  },
});
