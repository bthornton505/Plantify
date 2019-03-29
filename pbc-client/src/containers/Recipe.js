import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchRecipes } from '../actions/recipeActions'
import AllRecipes from '../components/recipes/AllRecipes';
import RecipeForm from '../components/recipes/RecipeForm';

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: this.props.user,
      recipes: this.props.user.recipes
    }
  }

  componentDidMount = () => {
    this.props.fetchRecipes()
  }

  render() {
    return(
      <div>
        <AllRecipes recipes={ this.state.recipes }/>
        <br></br>
        <p>Wanna make a new recipe? Go for it!</p>
        <h1>New Recipe</h1>
        <RecipeForm user={this.state.user_id}/>
      </div>
    )
  }
}

export default Recipe = withRouter(connect(null, { fetchRecipes })(Recipe));
