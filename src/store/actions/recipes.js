import * as actionTypes from '../enums/actionTypes';
import axios from '../../axios-recipes';

export const fetchRecipesStart = () => ({
  type: actionTypes.FETCH_RECIPES_START,
});

export const fetchRecipesFail = (error) => ({
  type: actionTypes.FETCH_RECIPES_FAIL,
  error,
});

export const fetchRecipesSucces = (recipes) => ({
  type: actionTypes.FETCH_RECIPES_SUCCESS,
  recipes,
});

export const fetchRecipes = () => (dispatch) => {
  dispatch(fetchRecipesStart());

  axios.post('/_find')
    .then((res) => {
      dispatch(fetchRecipesSucces(res.data));
    })
    .catch((err) => {
      dispatch(fetchRecipesFail(err));
    });
};
