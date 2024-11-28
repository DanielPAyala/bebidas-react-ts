import { StateCreator } from 'zustand';
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from '../services/RecipeService';
import {
  CategoriesType,
  DrinksType,
  DrinkType,
  RecipeType,
  SearchFilter,
} from '../types';

export type RecipesSliceType = {
  categories: CategoriesType;
  drinks: DrinksType;
  selectedRecipe: RecipeType;
  fetchCategories: () => Promise<void>;
  searchRecipes: (SearchFilters: SearchFilter) => Promise<void>;
  selectRecipe: (id: DrinkType['idDrink']) => Promise<void>;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: { drinks: [] },
  drinks: { drinks: [] },
  selectedRecipe: {} as RecipeType,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },
  searchRecipes: async (filters) => {
    const drinks = await getRecipes(filters);
    set({ drinks });
  },
  selectRecipe: async (id) => {
    const recipe = await getRecipeById(id);
    set({ selectedRecipe: recipe });
  },
});
