import fetch from 'isomorphic-fetch';
import { API_URL } from './apiUrl';
import * as types from './actionTypes';

const getRecipes = recipes => {
  return {
    type: types.REQUEST_RECIPES,
    recipes
  }
}

const getRecipe = recipe => {
  return {
    type: types.GET_RECIPE,
    recipe
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

export const fetchRecipes = recipes => {
  return (dispatch) => {
    return fetch(`${API_URL}/recipes`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.auth_token}`
      }
    })
    .then(response => response.json())
    .then(recipes => {
      dispatch(getRecipes(recipes))
    })
    .catch(error => console.log(error))
  }
}

export const fetchRecipe = recipe => {
  return (dispatch) => {
    return fetch(`${API_URL}/recipes/:id`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.auth_token}`
      }
    })
    .then(response => response.json())
    .then(recipe => {
      dispatch(getRecipe(recipe))
    })
    .catch(error => console.log(error))
  }
}

export const deleteRecipe = recipeId => {
  return (dispatch) => {
    return fetch(`${API_URL}/recipes/${recipeId}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.auth_token}`
      }
    })
    .then(recipe => {
      dispatch(destroyRecipe(recipe))
    })
    .catch(error => console.log(error))
  }
}
