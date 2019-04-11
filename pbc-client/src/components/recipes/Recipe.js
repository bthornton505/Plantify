import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import RecipeDetails from './RecipeDetails';
import { deleteRecipe, fetchRecipe } from '../../actions/recipeActions';


class Recipe extends Component {
  constructor(props){
    super(props)

    this.state = {
      isDeleted: false
    }
  }

  // renderIngredients = () => {
  //   const { ingredients } = this.props.recipe
  //   ingredients.map(ingredient => <li>{ingredient}</li>)
  // }

  componentDidMount = () => {
    const recipeId = this.props.match.params.id
    this.props.fetchRecipe(recipeId)
  }

  handleDeleteRecipe = event => {
    this.props.deleteRecipe(this.props.recipe.id)
    this.setState({
      isDeleted: true
    })
  }

  render() {
    if (this.state.isDeleted === true){
      return <Redirect to="/my_recipes" />
    }

    return(
      <div>
        <RecipeDetails recipe={this.props.recipe} handleDeleteRecipe={this.handleDeleteRecipe}/>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return { recipe: state.recipes}
}

export default connect(mapStateToProps, { deleteRecipe, fetchRecipe })(Recipe);

// ingredients={this.props.recipe.ingredients}
