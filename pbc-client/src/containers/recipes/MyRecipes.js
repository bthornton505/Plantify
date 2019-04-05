import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { fetchRecipes } from '../../actions/recipeActions'
import AllRecipes from '../../components/recipes/AllRecipes';

class MyRecipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: this.props.user.recipes
    }
  }

  componentDidMount = () => {
    this.props.fetchRecipes()
  }

  handleSubmit(recipe) {
    let newState = this.state.recipes.concat(recipe);
    this.setState({ recipes: newState });
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    let shouldUpdate = this.props.recipes !== nextProps.recipes;
    return shouldUpdate;
  }

  render() {
    return(
      <div>
        <AllRecipes recipes={ this.state.recipes }/>
        <Link to="/new_recipe">Create Recipe</Link>
        <br></br>
        <Link to={{
          pathname: `/user/${this.props.user.username}`
        }}>Profile</Link>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return { recipes: state.recipes}
// }

export default MyRecipes = withRouter(connect(null, { fetchRecipes })(MyRecipes));
