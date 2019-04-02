import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props){
    super(props)

    this.state = {
      recipe: props.location.state
    }
  }

  render() {
    const { recipe } = this.state.recipe
    console.log(recipe)
    return(
      <div>
        <h2>{ recipe.title }</h2>
        <p>
          <label> Description: </label>
          { recipe.description }
        </p>
        <p>
          <label>Cuisine: </label>
          { recipe.cuisine }
        </p>
        <p>
          <label>Ingredients: </label>
          <ol>
            <li>
              Ingredients listed here
            </li>
          </ol>
        </p>
      </div>
    )
  }
}

export default Recipe;
