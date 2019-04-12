import React from 'react'

const Ingredient = props => {
  const ingredients = props.ingredients

  // this allows the ingredients to wait for the data to arrive from redux and render when it is recieved
  let ingredientList = ingredients ? ingredients.map((ingredient, index) =>
    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"
    key={index}>{ingredient}</li>) : "Loading"

  return(
    <ul className="list pl0 measure center dark-green">
      {ingredientList}
    </ul>
  )
}

export default Ingredient
