import { combineReducers } from 'redux';
import * as actionTypes from '../enums/actionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_RECIPES_SUCCESS:
      return action.response.entities.recipes;

    case actionTypes.FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        ...action.response.entities.recipes,
      };

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_RECIPES_SUCCESS: {
      return action.response.result
    }

    case actionTypes.FETCH_RECIPE_SUCCESS: {
      return [
        ...state,
        action.response.result,
      ];
    }

    default:
      return state;
  }
};

const statusInitialState = {
  isFetching: false,
  isFetched: false,
  error: null,
};

const status = (state = statusInitialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_RECIPES_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case actionTypes.FETCH_ALL_RECIPES_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case actionTypes.FETCH_ALL_RECIPES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: null,
      };

    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds,
  status,
});
