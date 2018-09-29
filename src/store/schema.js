import { schema } from 'normalizr';

export const recipeSchema = new schema.Entity('recipes');
export const recipesListSchema = [recipeSchema];
