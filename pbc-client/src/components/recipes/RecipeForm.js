import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { createRecipe } from '../../actions/recipeActions'

class RecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      instructions: "",
      ingredients: [],
      cuisine: "",
      userId: this.props.user.id,
      isCreated: false
    }
  }

  updateIngredientArray = (value) => {
    let updatedArr = [...this.state.ingredients]
    updatedArr.push(value)
    this.setState({
      updatedArr
    })
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
    // console.log(recipe)
    this.props.createRecipe(recipe)
    this.setState({
      isCreated: true
    })
  }

  render() {
    if (this.state.isCreated === true){
      return <Redirect to="/my_recipes" />
    }
    // const { ingredients } = this.state
    return(
      <div>
      <p>Wanna make a new recipe? Go for it!</p>
      <h1>New Recipe</h1>

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
            <label>Description: </label>
            <textarea
              type="text"
              name="description"
              value={this.state.description}
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
              // value={this.updateIngredientArray}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Ingredient: </label>
            <input
              type="text"
              name="ingredients"
              // value={this.updateIngredientArray}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Ingredient: </label>
            <input
              type="text"
              name="ingredients"
              // value={this.updateIngredientArray}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Ingredient: </label>
            <input
              type="text"
              name="ingredients"
              // value={this.updateIngredientArray}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Instructions: </label>
            <textarea
              type="text"
              name="instructions"
              value={this.state.instructions}
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

// commented code
