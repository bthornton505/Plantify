import React from 'react'

const EditIngredients = props => {
  const ingredients = props.ingredients

  // this allows the ingredients to wait for the data to arrive from redux and render when it is recieved
  let ingredientList = ingredients ? ingredients.map((ingredient, index) =>
    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"
        key={index}>{ingredient}
        <button onClick={props.handleRemoveIngredient}>X</button>
    </li>)
    : "Loading"

  return(
    <ul className="list pl0 measure center dark-green">
      {ingredientList}
    </ul>
  )
}

export default EditIngredients;

// <div className="mt3">
//   <label className="db fw6 lh-copy f6">Current Ingredients: </label>
//   {
//     this.state.ingredients.map(ingredient =>
//       <ul className="list pl0 measure center">
//         <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 dark-green">
//           {ingredient}
//           <button onClick={this.handleRemoveIngredient}>X</button>
//         </li>
//       </ul>
//     )
//   }
// </div>
