import React, { Component } from 'react';

class AllRecipes extends Component {

  render(){
    return(
      <div>
        <p>
          <label>Recipes: </label>
        </p>
        <ol>
          <li>
            This will render links to recipes.
          </li>
        </ol>
      </div>
    )
  }
}

export default AllRecipes;
