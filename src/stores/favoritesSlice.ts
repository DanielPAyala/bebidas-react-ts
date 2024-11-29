import { StateCreator } from 'zustand';
import { RecipeType } from '../types';
import { RecipesSliceType } from './recipeSlice';

export type FavoritesSliceType = {
  favorites: RecipeType[];
  handleClickFavorite: (recipe: RecipeType) => void;
  favoriteExists: (id: string) => boolean;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & RecipesSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(
          (fav) => fav.idDrink !== recipe.idDrink
        ),
      }));
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
    }
    // get().closeModal();
  },
  favoriteExists: (id) => get().favorites.some((fav) => fav.idDrink === id),
});
