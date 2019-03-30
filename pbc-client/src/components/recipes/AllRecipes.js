import React from 'react';
import { connect } from 'react-redux'
import RecipeLink from './RecipeLink'
import { fetchRecipe } from '../../actions/recipeActions'

const AllRecipes = props => {
  // recipeList will map through user recipes and create ordered list of recipes"
  const recipeList = props.recipes.map(recipe => {
    return(
      <RecipeLink key={ recipe.id } recipe={ recipe } getRecipe={ fetchRecipe }/>
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

export default connect(null, { fetchRecipe })(AllRecipes);
