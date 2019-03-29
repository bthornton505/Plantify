import React, { Component } from 'react';
import AllRecipes from '../components/recipes/AllRecipes';
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
        <AllRecipes />
        <br></br>
        <p>Wanna make a new recipe? Go for it!</p>
        <h1>New Recipe</h1>
        <RecipeForm user={this.state.user_id}/>
      </div>
    )
  }
}

export default Recipe;
