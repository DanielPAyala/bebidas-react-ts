import { z } from 'zod';
import {
  CategoriesAPIResponseSchema,
  DrinkAPIResponseSchema,
  DrinksAPIResponseSchema,
  RecipeAPIResponseSchema,
  SearchFilterSchema,
} from '../utils/recipes.schema';

export type CategoriesType = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type DrinksType = z.infer<typeof DrinksAPIResponseSchema>;
export type DrinkType = z.infer<typeof DrinkAPIResponseSchema>;
export type RecipeType = z.infer<typeof RecipeAPIResponseSchema>;
