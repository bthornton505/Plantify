import * as types from '../actions/actionTypes';

export default (state = [], action) => {

  switch(action.type) {

    case types.REQUEST_RECIPES:
      return { ...state, recipes: action.recipes }

    case types.GET_RECIPE:
      return action.recipe

    case types.CREATE_RECIPE:
      // return state.concat(action.recipe)
      return {
        ...state, recipes:
        [...state.recipes, action.recipe]
      }

    case types.UPDATE_RECIPE:
      return state.map(recipe => recipe.id === action.recipe.id ? action.recipe : recipe)

    case types.DELETE_RECIPE:
      return { ...state, recipes:[ state.filter(recipe => recipe.id !== action.id) ] } 
        // { ...state, all: state.all.filter(todo => todo.id !== action.payload.id) }

    default:
      return state;
  }
}
