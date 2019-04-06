import React from 'react';
import { Link } from 'react-router-dom'

const AllRecipes = props => {
  // recipeList will map through user recipes and create ordered list of recipes"
  const recipeList = props.recipes.map(recipe => {
    return(
      <li key={recipe.id}>
        <Link to={{
          pathname: `/recipe/${recipe.id}`,
          // state: {
          //   recipe: recipe
          // }
        }}>{recipe.title}</Link>
      </li>
    )
  })

    return(
      <div>
        <label>Recipes: </label>
        <ol>
          {recipeList}
        </ol>
      </div>
    )
}

AllRecipes.defaultProps = {
  recipes: []
}

export default AllRecipes;
