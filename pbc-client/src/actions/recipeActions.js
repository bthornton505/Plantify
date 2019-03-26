import fetch from 'isomorphic-fetch';
import { API_URL } from './apiUrl';
import * as types from './actionTypes';

const addRecipe = recipe => {
  return {
    type: types.CREATE_RECIPE,
    recipe: recipe
  }
}

export const createRecipe = recipe => {
  return (dispatch) => {
    return fetch(`${API_URL}/recipes`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ recipe: recipe })
    })
    .then(response => response.json())
    .then(recipe => {
      dispatch(addRecipe(recipe))
    })
    .catch(error => console.log(error))
  }
}
