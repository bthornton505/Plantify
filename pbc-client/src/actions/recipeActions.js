import fetch from 'isomorphic-fetch';
import { API_URL } from './apiUrl';
import * as types from './actionTypes';

const setRecipes = recipes => {
  return {
    type: types.REQUEST_RECIPES,
    recipes
  }
}

const addRecipe = recipe => {
  return {
    type: types.CREATE_RECIPE,
    recipe
  }
}

const destroyRecipe = recipe => {
  return {
    type: types.DELETE_RECIPE,
    recipe
  }
}



export const createRecipe = recipe => {
  return (dispatch) => {
    return fetch(`${API_URL}/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${localStorage.auth_token}`
      },
      body: JSON.stringify( recipe )
    })
    .then(response => response.json())
    .then(recipe => {
      dispatch(addRecipe(recipe))
    })
    .catch(error => console.log(error))
  }
}
