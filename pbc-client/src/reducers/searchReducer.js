import * as types from '../actions/actionTypes';

const initialState = {
  searchResults: []
}

export default (state = initialState, action) => {

  switch(action.type){

    case types.SEARCH_RECIPES:
      return { ...state, searchResults: action.recipeResults }

    default:
      return state;
  }
}
