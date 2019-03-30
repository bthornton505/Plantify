import React from 'react';

const AllRecipes = props => {
  // recipeList will map through user recipes and create ordered list of recipes"
  const recipeList = props.recipes.map((recipe, index) => {

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

export default AllRecipes;
