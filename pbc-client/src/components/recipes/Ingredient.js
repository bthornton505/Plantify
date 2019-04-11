import React from 'react'

const Ingredient = props => {
  const ingredients = props.ingredients
  // let ingredientList = ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)

  let ingredientList = ingredients ? ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>) : "Loading"

  return(
    <ul>
      <li>{ingredientList}</li>
    </ul>
  )
}

export default Ingredient
