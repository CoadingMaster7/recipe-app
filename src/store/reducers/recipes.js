import * as actionTypes from '../enums/actionTypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_RECIPES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        data: action.recipes,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default recipes;
