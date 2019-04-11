import React from 'react';
import Ingredient from './Ingredient'

const RecipeDetails = props => {
  const { title, description, cuisine, ingredients, instructions } = props.recipe
  console.log(`Ingredients are ${ingredients}`)
  // const ingredientsList = props.recipe.ingredients.map(ingredient => {
  //   return(
  //     <li>{ingredient}</li>
  //   )
  // })

  return (
    <div>
    <h2>{ title }</h2>
    <p>
      <label> Description: </label>
      { description }
    </p>
    <p>
      <label>Cuisine: </label>
      { cuisine }
    </p>
    <div>
      <label>Ingredients: </label>
      <Ingredient ingredients={ingredients}/>
      {console.log(ingredients)}
    </div>
    <p>
      <label>Instructions: </label>
      { instructions }
    </p>
    <button onClick={props.handleDeleteRecipe}>
      Delete Recipe
    </button>
    </div>
  )
}

export default RecipeDetails
