import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { fetchRecipes } from '../../actions/recipeActions'
import AllRecipes from '../../components/recipes/AllRecipes';

class MyRecipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user
    }
  }

  componentDidMount = () => {
    this.props.fetchRecipes()
  }

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return this.props.user.recipes == nextState.user.recipes;
  //   // if (this.state.user.recipes === nextState.user.recipes) {
  //   //   return false
  //   // }
  // }

  render() {
    return(
      <div>
        <AllRecipes recipes={ this.props.recipes }/>
        <Link className="black link hover-dark-green" to="/new_recipe">
          Create Recipe
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { recipes: state.recipes.recipes}
}

export default MyRecipes = withRouter(connect(mapStateToProps, { fetchRecipes })(MyRecipes));
