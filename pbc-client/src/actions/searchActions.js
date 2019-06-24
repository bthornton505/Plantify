import fetch from 'isomorphic-fetch';
import * as types from './actionTypes';

const searchRecipes = recipeResults => {
  return {
    type: types.SEARCH_RECIPES,
    recipeResults
  }
}

export const recipeSearch = recipes => {
  return (dispatch) => {
    return fetch(`/api/search_recipes`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.auth_token}`
      }
    })
    .then(response => response.json())
    .then(recipes => {
      dispatch(searchRecipes(recipes))
    })
    .catch(error => console.log(error))
  }
}
