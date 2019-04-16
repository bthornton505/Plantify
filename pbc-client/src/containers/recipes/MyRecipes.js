import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipeActions'
import AllRecipes from '../../components/recipes/AllRecipes';

class MyRecipes extends Component {

  componentDidMount = () => {
    this.props.fetchRecipes()
  }

  render() {
    return(
      <div>
        <AllRecipes recipes={ this.props.recipes }/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipes
  }
}

export default connect(mapStateToProps, { fetchRecipes })(MyRecipes);
