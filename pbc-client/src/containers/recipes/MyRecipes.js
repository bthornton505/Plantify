import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { fetchRecipes } from '../../actions/recipeActions'
import AllRecipes from '../../components/recipes/AllRecipes';
// import RecipeForm from '../../components/recipes/RecipeForm';

class MyRecipes extends Component {
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
        <Link to="/new_recipe">Create Recipe</Link>
      </div>
    )
  }
}

export default MyRecipes = withRouter(connect(null, { fetchRecipes })(MyRecipes));
