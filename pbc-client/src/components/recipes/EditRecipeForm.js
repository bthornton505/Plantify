import React, { Component } from 'react';
import EditIngredients from './EditIngredients'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { fetchEditRecipe, updateRecipe } from '../../actions/recipeActions'

class EditRecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.recipe.title,
      description: this.props.recipe.description,
      instructions: this.props.recipe.instructions,
      ingredient: "",
      ingredients: this.props.recipe.ingredients,
      cuisine: this.props.recipe.cuisine,
      userId: this.props.user.id,
      isUpdated: false
    }
  }

  componentDidMount = () => {
    const recipeId = this.props.match.params.id
    this.props.fetchEditRecipe(recipeId)
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

  handleRemoveIngredient = (event, ingredients, target) => {
    event.preventDefault();

    for (let i = 0; i < ingredients.length; i++){
      if (ingredients[i] === target) {
        ingredients.splice(i, 1)
      }
    }
    return ingredients
  }

  // renderCurrentIngredients = () => {
  //   let ingredients = this.state
  //
  //   let ingredientList = ingredients ? ingredients.map((ingredient, index) =>
  //     <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"
  //     key={index}>{ingredient}</li>) : "Loading"
  //
  //   return(
  //     <ul className="list pl0 measure center dark-green">
  //       {ingredientList}
  //     </ul>
  //   )
  // }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    const recipeId = this.props.recipe.id

    this.props.updateRecipe(recipeId)
    this.setState({
      isCreated: true
    })
  }

  render() {
    if (this.state.isUpdated === true){
      return <Redirect to="/my_recipes" />
    }

    // console.log(this.props.recipe.ingredients)
    const { ingredient, ingredients } = this.state

    return(
      <div className="tc ph4">
      <h1 className="f3 f2-m f1-l fw2 black-90 mv3">Update your recipe!</h1>

        <form className="measure center" onSubmit={this.handleSubmit}>
          <fieldset className="ba b--transparent ph0 mh0">

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

              <fieldset id="add_recipe" className="ba b--transparent ph0 mh0">
                <div className="">
                  <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib dark-green" onClick={this.addIngredient}>
                    Add
                  </button>
                </div>
              </fieldset>

            </div>

            <EditIngredients ingredients={ingredients} handleRemoveIngredient={this.handleRemoveIngredient}/>

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
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib dark-green" type="submit" value="Update" />
          </div>
        </form>
      </div>
    )
  }
}

EditRecipeForm.defaultProps = {
  ingredients: []
}

const mapStateToProps = state => {
  return { recipe: state.recipes}
}

export default EditRecipeForm = withRouter(connect(mapStateToProps, { fetchEditRecipe, updateRecipe })(EditRecipeForm));

// <div className="mt3">
//   <label className="db fw6 lh-copy f6">Current Ingredients: </label>
//   {
//     this.state.ingredients.map(ingredient =>
//       <ul className="list pl0 measure center">
//         <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 dark-green">
//           {ingredient}
//           <button onClick={this.handleRemoveIngredient}>X</button>
//         </li>
//       </ul>
//     )
//   }
// </div>
