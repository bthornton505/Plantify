import React from 'react'

const Ingredient = props => {
  const ingredients = props.ingredients
  // let ingredientList = ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
  // console.log(ingredientList)

  return(
    <ul>
      {ingredients}
    </ul>
  )
}

export default Ingredient
