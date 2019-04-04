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
      ingredients: [],
      cuisine: "",
      userId: this.props.user.id,
      redirect: false
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    const recipe = this.state
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: `/recipe/${recipe.id}`
      }} />
    }
  }

  // updateIngredientArray = (ingredientIndex, newIngredient = {}) => {
  //   const newIngredients = Object.assign([], this.state.ingredients);
  //   newIngredients[ingredientIndex] = newIngredient;
  //   this.setState({ingredients: newIngredients})
  // }

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

  // handleSubmit = event => {
  //   event.preventDefault()
  //   if (this.props.authenticate(this.state)) {
  //     this.props.history.push(`/user/${this.state.username}`)
  //     window.alert("You're Logged In!")
  //   } else {
  //     window.alert("Sorry, something went wrong. Please try logging in again.")
  //   }
  // }

  handleSubmit = event => {
    event.preventDefault()

    const recipe = this.state
    // console.log(recipe)
    if (this.props.createRecipe(recipe)) {
      this.setState({
        redirect: true
      })
      this.renderRedirect()
    }
  }



  render() {
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
        {this.renderRedirect()}
      </div>
    )
  }
}

export default RecipeForm = withRouter(connect(null, { createRecipe })(RecipeForm));
