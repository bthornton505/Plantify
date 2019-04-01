import React from 'react'
import { Link } from 'react-router-dom'
// import { fetchRecipe } from '../../actions/recipeActions';
// import Recipe from './Recipe'

// const handleRecipe = () => {
//   this.props.fetchRecipe(this.state.recipe)
// }

const RecipeLink = props => {
  return(
    <li>
      <Link to={`/recipe/${props.recipe.id}`}>{props.recipe.title}</Link>
    </li>
  )
}

export default RecipeLink;
