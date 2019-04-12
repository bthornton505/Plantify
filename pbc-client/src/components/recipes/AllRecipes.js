import React from 'react';
import { Link } from 'react-router-dom'

const AllRecipes = props => {
  // recipeList will map through user recipes and create ordered list of recipes"
  const recipeList = props.recipes.map(recipe => {
    return(
      <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" key={recipe.id}>
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
      <div className="tc ph4">
        <h1 className="f3 f2-m f1-l fw2 black-90 mv3">Recipes</h1>
        <ul className="list pl0 measure center">
          {recipeList}
        </ul>
        <div className="">
          <Link className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib dark-green link" to="/new_recipe">
            Create Recipe
          </Link>
        </div>
      </div>
    )
}

AllRecipes.defaultProps = {
  recipes: []
}

export default AllRecipes;

// <Link className="black link hover-dark-green" to="/new_recipe">
//   Create Recipe
// </Link>
