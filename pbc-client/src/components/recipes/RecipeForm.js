import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createRecipe } from '../../actions/recipeActions'

class RecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      ingredients: [
        {}
      ],
      cuisine: "",
      userId: this.props.user.id
    }
  }

  updateIngredient = (ingredientIndex, newIngredient = {}) => {
    const newIngredients = Object.assign([], this.state.ingredients);
    newIngredients[ingredientIndex] = newIngredient;
    this.setState({ingredients: newIngredients})
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    const recipe = this.state
    console.log(recipe)
    this.props.createRecipe(recipe)
    this.setState({
      title: "",
      description: "",
      ingredients: "",
      cuisine: "",
      userId: this.props.user.id
    })
  }

  render() {
    const { ingredients } = this.state
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Cuisine: </label>
            <input
              type="text"
              name="cuisine"
              value={this.state.cuisine}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Ingredient: </label>
            <input
              type="text"
              name="ingredients"
              // value={this.state.ingredients}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Ingredient: </label>
            <input
              type="text"
              name="ingredients"
              // value={this.state.ingredients}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Ingredient: </label>
            <input
              type="text"
              name="ingredients"
              // value={this.state.ingredients}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Ingredient: </label>
            <input
              type="text"
              name="ingredients"
              // value={this.state.ingredients}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Description: </label>
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </p>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default RecipeForm = withRouter(connect(null, { createRecipe })(RecipeForm));
