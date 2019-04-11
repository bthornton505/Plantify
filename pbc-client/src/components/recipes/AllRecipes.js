import React from 'react';
import { Link } from 'react-router-dom'

const AllRecipes = props => {
  // recipeList will map through user recipes and create ordered list of recipes"
  const recipeList = props.recipes.map(recipe => {
    return(
      <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" key={recipe.id}>
        <Link
          className="black link hover-dark-green"
          to={{
          pathname: `/recipe/${recipe.id}`,
          // state: {
          //   recipe: recipe
          // }
        }}>{recipe.title}</Link>
      </li>
    )
  })

    return(
      <div class="f4 center mw6 pa3 pa5-ns">
        <legend class="f4 fw6 ph0 mh0">Recipes: </legend>
        <ul class="list pl0 measure center">
          {recipeList}
        </ul>
      </div>
    )
}

AllRecipes.defaultProps = {
  recipes: []
}

export default AllRecipes;
