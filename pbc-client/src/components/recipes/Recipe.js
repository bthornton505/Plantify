import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import RecipeDetails from './RecipeDetails';
import { deleteRecipe, fetchRecipe } from '../../actions/recipeActions';

class Recipe extends Component {
  state = {
    isDeleted: false,
    editRecipe: false
  }

  componentDidMount = () => {
    const recipeId = this.props.match.params.id
    this.props.fetchRecipe(recipeId)
  }

  handleEditRedirect = event => {
    this.setState({
      editRecipe: true
    })
  }

  handleDeleteRecipe = event => {
    this.props.deleteRecipe(this.props.recipe.id)
    this.setState({
      isDeleted: true
    })
  }

  render() {
    const recipeId = this.props.match.params.id

    if (this.state.isDeleted === true){
      return <Redirect to="/my_recipes" />
    }

    if (this.state.editRecipe === true){
      let editRoute = `/recipe/${recipeId}/edit`
      return <Redirect to={editRoute} />
    }

    return(
      <div>
        <RecipeDetails
          recipe={this.props.recipe}
          handleDeleteRecipe={this.handleDeleteRecipe}
          handleEditRedirect={this.handleEditRedirect}
        />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return { recipe: state.recipes}
}

export default connect(mapStateToProps, { deleteRecipe, fetchRecipe })(Recipe);
