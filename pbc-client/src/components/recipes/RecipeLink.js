import React from 'react'
// import { fetchRecipe } from '../../actions/recipeActions';
// import Recipe from './Recipe'

// const handleRecipe = () => {
//   this.props.fetchRecipe(this.state.recipe)
// }

const RecipeLink = props => {
  return(
    <li>
      <a href={`/recipe/${props.recipe.id}`} >{props.recipe.title}</a>
    </li>
  )
}

export default RecipeLink;
