import React from 'react';

const AllRecipes = props => {
  // recipeList will map through user recipes and create ordered list of recipes"
  let recipeList = props.recipes.map((recipe, index) => {

  })

    return(
      <div>
        <p>
          <label>Recipes: </label>
        </p>
        <ol>
          <li>
            {recipeList}
          </li>
        </ol>
      </div>
    )
}

export default AllRecipes;
