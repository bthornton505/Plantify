import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      ingredients: [],
      cuisine: "",
      userId: 0
    }
  }

  render() {
    return(
      <div>
        <h1>Recipes</h1>
        <p>Wanna make a new recipe? Go for it!</p>
        This will be a recipe form... maybe?
      </div>
    )
  }
}

export default Recipe;
