import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchRecipes } from '../../actions/recipeActions'
import AllRecipes from '../../components/recipes/AllRecipes';

class MyRecipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user
    }
  }

  componentDidMount = () => {
    this.props.fetchRecipes()
  }

  render() {
    return(
      <div>
        <AllRecipes recipes={ this.props.recipes }/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { recipes: state.recipes.recipes}
}

export default MyRecipes = withRouter(connect(mapStateToProps, { fetchRecipes })(MyRecipes));
