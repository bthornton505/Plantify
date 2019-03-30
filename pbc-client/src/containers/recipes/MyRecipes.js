import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchRecipes } from '../../actions/recipeActions'
import AllRecipes from '../../components/recipes/AllRecipes';
import RecipeForm from '../../components/recipes/RecipeForm';

class MyRecipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: this.props.user,
      recipes: this.props.user.recipes
    }
  }

  componentWillMount = () => {
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

export default MyRecipes = withRouter(connect(null, { fetchRecipes })(MyRecipes));
