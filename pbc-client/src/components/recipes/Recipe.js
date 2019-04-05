import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { deleteRecipe } from '../../actions/recipeActions';

class Recipe extends Component {
  constructor(props){
    super(props)

    this.state = {
      recipe: props.location.state.recipe,
      isDeleted: false
    }
  }

  handleDeleteRecipe = event => {
    const { recipe } = this.state
    this.props.deleteRecipe(recipe.id)
    this.setState({
      recipe: null,
      isDeleted: true
    })
  }

  render() {
    if (this.state.isDeleted === true){
      return <Redirect to="/my_recipes" />
    }

    const { recipe } = this.state
    console.log(recipe)
    return(
      <div>
        <h2>{ recipe.title }</h2>
        <p>
          <label> Description: </label>
          { recipe.description }
        </p>
        <p>
          <label>Cuisine: </label>
          { recipe.cuisine }
        </p>
        <label>Ingredients: </label>
        <ol>
          <li>
            Ingredients listed here
          </li>
        </ol>
        <button onClick={this.handleDeleteRecipe}>
          Delete Recipe
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { recipe: state.recipes.recipe}
}

export default connect(mapStateToProps, { deleteRecipe })(Recipe);
