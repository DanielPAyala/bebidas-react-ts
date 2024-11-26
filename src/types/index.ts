import { z } from 'zod';
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponseSchema,
  SearchFilterSchema,
} from '../utils/recipes.schema';

export type CategoriesType = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type DrinksType = z.infer<typeof DrinksAPIResponseSchema>;
