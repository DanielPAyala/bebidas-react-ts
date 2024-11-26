import axios from 'axios';
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponseSchema,
} from '../utils/recipes.schema';
import { SearchFilter } from '../types';

export async function getCategories() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const { data } = await axios.get(url);
  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipes(searchFilters: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`;
  const { data } = await axios.get(url);
  const result = DrinksAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}
