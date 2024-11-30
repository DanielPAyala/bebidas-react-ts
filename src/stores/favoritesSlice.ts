import { StateCreator } from 'zustand';
import { RecipeType } from '../types';
import { RecipesSliceType } from './recipeSlice';
import { NotificationSliceType } from './notificationSlice';

export type FavoritesSliceType = {
  favorites: RecipeType[];
  handleClickFavorite: (recipe: RecipeType) => void;
  favoriteExists: (id: string) => boolean;
  loadFromStoreage: () => void;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & RecipesSliceType & NotificationSliceType,
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
      get().showNotification({
        text: 'Se ha eliminado de favoritos',
        error: false,
      });
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
      get().showNotification({
        text: 'Se ha añadido a favoritos',
        error: false,
      });
    }
    // get().closeModal();
    localStorage.setItem('favorites', JSON.stringify(get().favorites));
  },
  favoriteExists: (id) => get().favorites.some((fav) => fav.idDrink === id),
  loadFromStoreage: () => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      set({ favorites: JSON.parse(storedFavorites) });
    }
  },
});
