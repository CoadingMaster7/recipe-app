import { createSelector } from 'reselect'

const getRecipesIds = (state) => state.recipes.allIds;
const getRecipesById = (state) => state.recipes.byId;

export const getAllRecipes = createSelector(
  getRecipesIds,
  getRecipesById,
  (recipesIds, recipesById) => (
    recipesIds.map((recipeId) => recipesById[recipeId])
  )
);

export const getRecipeById = (state, recipeId) => {
  const { recipes } = state;
  return recipes.byId[recipeId];
};
