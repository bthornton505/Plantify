import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RecipeLink from './RecipeLink'
import { fetchRecipe } from '../../actions/recipeActions'

const AllRecipes = props => {
  // recipeList will map through user recipes and create ordered list of recipes"
  const recipeList = props.recipes.map(recipe => {
    return(
      <Link to={{
        pathname: `/recipe/${recipe.id}`,
        key: recipe.id,
        state: {
          recipe: recipe
        }
      }}>{recipe.title}</Link>
    )
  })

    return(
      <div>
        <label>Recipes: </label>
        <ol>
          <li>
            {recipeList}
          </li>
        </ol>
      </div>
    )
}

export default connect(null, { fetchRecipe })(AllRecipes);
