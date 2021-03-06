import React from 'react';
import Ingredient from './Ingredient'

const RecipeDetails = props => {
  const { title, description, cuisine, ingredients, instructions } = props.recipe

  return (
    <div className="tc ph4">
    <h2 className="f3 f2-m f1-l fw2 black-90 mv3">
      { title }
    </h2>

      <p>
        { description }
      </p>

      <p>
        { cuisine } inspired cuisine
      </p>

      <div>
        <label>Ingredients: </label>
        <Ingredient ingredients={ingredients}/>
      </div>

      <div>
        <label>Instructions:</label>
        <p>
          { instructions }
        </p>
      </div>

      <button  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib dark-green" onClick={props.handleEditRedirect}>
        Edit Recipe
      </button>

      <button  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib dark-green" onClick={props.handleDeleteRecipe}>
        Delete Recipe
      </button>

    </div>
  )
}

export default RecipeDetails
