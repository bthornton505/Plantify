import React from 'react'

const Ingredient = props => {
  const ingredients = props.ingredients
  // let ingredientList = ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)

  let ingredientList = ingredients ? ingredients.map((ingredient, index) =>
    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"
    key={index}>{ingredient}</li>) : "Loading"

  return(
    <ul className="list pl0 measure center">
      {ingredientList}
    </ul>
  )
}

export default Ingredient
