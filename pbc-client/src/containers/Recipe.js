import React, { Component } from 'react';
import RecipeForm from '../components/recipes/RecipeForm';

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: this.props.user
    }
  }

  render() {
    return(
      <div>
        <h1>New Recipe</h1>
        <p>Wanna make a new recipe? Go for it!</p>
        This will be a recipe form... maybe?
        <RecipeForm user={this.state.user_id}/>
      </div>
    )
  }
}

export default Recipe;
