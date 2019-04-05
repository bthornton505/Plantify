import React from 'react';

const RecipeDetails = props => {

  return (
    <div>
    <h2>{ props.recipe.title }</h2>
    <p>
      <label> Description: </label>
      { props.recipe.description }
    </p>
    <p>
      <label>Cuisine: </label>
      { props.recipe.cuisine }
    </p>
    <label>Ingredients: </label>
    <ol>
      <li>
        Ingredients listed here
      </li>
    </ol>
    <button onClick={props.handleDeleteRecipe}>
      Delete Recipe
    </button>
    </div>
  )
}

export default RecipeDetails
