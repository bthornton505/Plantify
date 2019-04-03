import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteRecipe } from '../../actions/recipeActions';

class Recipe extends Component {
  constructor(props){
    super(props)

    this.state = {
      recipe: props.location.state
    }
  }

  handleDeleteRecipe = event => {
    event.preventDefault()
  }

  render() {
    const { recipe } = this.state.recipe
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
        <input
          type="submit"
          value="edit"
        />
        <button onClick={() => this.props.deleteRecipe(recipe.id)}>
          Delete Recipe
        </button>
      </div>
    )
  }
}

export default connect(null, { deleteRecipe })(Recipe);
