import React from 'react'

const Recipe = props => {
  return(
    <li>
      <a href={`/recipe/${props.recipe.id}`}>{props.recipe.title}</a>
    </li>
  )
}

export default Recipe;
