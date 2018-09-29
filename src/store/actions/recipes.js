import { normalize } from 'normalizr';
import * as actionTypes from '../enums/actionTypes';
import * as schema from '../schema';
import axios from '../../axios-recipes';

/**
* Fetch all recipes
*/

const fetchAllRecipesStart = () => ({
  type: actionTypes.FETCH_ALL_RECIPES_START,
});

const fetchAllRecipesFail = (error) => ({
  type: actionTypes.FETCH_ALL_RECIPES_FAIL,
  error,
});

const fetchAllRecipesSuccess = (response) => ({
  type: actionTypes.FETCH_ALL_RECIPES_SUCCESS,
  response,
});

const fetchAllRecipes = () => (dispatch) => {
  dispatch(fetchAllRecipesStart());

  return axios.post('/_find')
    .then((res) => normalize(res.data, schema.recipesListSchema))
    .then((res) => dispatch(fetchAllRecipesSuccess(res)))
    .catch((err) => dispatch(fetchAllRecipesFail(err)));
};

const shouldFetchAllRecipes = (state) => {
  const { recipes }  = state;
  return !(recipes.status.isFetching || recipes.status.isFetched);
};

export const fetchAllRecipesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchAllRecipes(getState())) {
    return dispatch(fetchAllRecipes());
  } else {
    return Promise.resolve();
  }
};

/**
* Fetch single recipe
*/

const fetchRecipeStart = () => ({
  type: actionTypes.FETCH_RECIPE_START,
});

const fetchRecipeFail = (error) => ({
  type: actionTypes.FETCH_RECIPE_FAIL,
  error,
});

const fetchRecipeSuccess = (response) => ({
  type: actionTypes.FETCH_RECIPE_SUCCESS,
  response,
});

const fetchRecipe = (recipeId) => (dispatch) => {
  dispatch(fetchRecipeStart());

  return axios.post('/_find', { id: recipeId })
    .then((res) => normalize(res.data[0], schema.recipeSchema))
    .then((res) => dispatch(fetchRecipeSuccess(res)))
    .catch((err) => dispatch(fetchRecipeFail(err)));
};

const shouldFetchRecipe = (state, recipeId) => {
  const { recipes }  = state;

  if (!recipes.byId[recipeId]) {
    return true;
  }

  return false;
};

export const fetchRecipeIfNeeded = (recipeId) => (dispatch, getState) => {
  if (shouldFetchRecipe(getState(), recipeId)) {
    return dispatch(fetchRecipe(recipeId));
  } else {
    return Promise.resolve();
  }
};
