export const getAllRecipes = (state) => {
  const { recipes } = state;
  return recipes.allIds.map((recipeId) => recipes.byId[recipeId]);
};

export const getRecipeById = (state, recipeId) => {
  const { recipes } = state;
  return recipes.byId[recipeId];
};
