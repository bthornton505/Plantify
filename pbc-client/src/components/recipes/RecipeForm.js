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
      ingredient: "",
      ingredients: [],
      cuisine: "",
      userId: this.props.user.id,
      isCreated: false
    }
  }

  addIngredient = () => {
    const { ingredients, ingredient } = this.state;
    ingredients.push(ingredient)

    this.setState({
      ingredients: ingredients,
      ingredient: ''
    })
  }

  addIngredient = event => {
    event.preventDefault()
    const { ingredients, ingredient } = this.state;
    ingredients.push(ingredient)

    this.setState({
      ingredients,
      ingredient: ''
    }, () => console.log(ingredients))
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
    const { ingredient } = this.state

    return(
      <div className="tc ph4">
      <h1 className="f3 f2-m f1-l fw2 black-90 mv3">Wanna make a new recipe? Go for it!</h1>

        <form className="measure center" onSubmit={this.handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Title: </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Description: </label>
              <textarea
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Cuisine: </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="cuisine"
                value={this.state.cuisine}
                onChange={this.handleChange}
              />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Ingredient: </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="ingredient"
                value={ingredient}
                onChange={this.handleChange}
              />

              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <div className="">
                  <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.addIngredient}>
                    Add
                  </button>
                </div>
              </fieldset>

            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Current Ingredients: </label>
              {
                this.state.ingredients.map(ingredient =>
                  <ul className="list pl0 measure center">
                    <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
                      {ingredient}
                    </li>
                  </ul>
                )
              }
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Instructions: </label>
              <textarea
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="instructions"
                value={this.state.instructions}
                onChange={this.handleChange}
              />
            </div>

          </fieldset>

          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default RecipeForm = withRouter(connect(null, { createRecipe })(RecipeForm));

// commented code
