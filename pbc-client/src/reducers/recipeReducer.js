import * as types from '../actions/actionTypes';

export default (state = [], action) => {

  switch(action.type) {

    case types.REQUEST_RECIPES:
      return action.recipes

    case types.CREATE_RECIPE:
      return state.concat(action.recipe) 

    case types.UPDATE_RECIPE:
      return state.map(recipe => recipe.id === action.recipe.id ? action.recipe : recipe)

    case types.DELETE_RECIPE:
      const recipes = state.filter(recipe => recipe.id !== action.id)
      return recipes

    default:
      return state;
  }
}
