import React, { Component } from 'react';

class RecipeForm extends Component {
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
    const { title, description, ingredients, cuisine, user } = this.state;

    return(

    )
  }
}

export default RecipeForm;
