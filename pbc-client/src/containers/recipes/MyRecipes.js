import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
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

  // componentWillReceiveProps = (nextProps) => {
  //       if (this.props.recipes !== nextProps.recipes) {
  //         this.setState({recipes: nextProps.recipes});
  //       }
  //     }

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.recipes !== nextProps.recipes || nextState.recipes !== this.props.recipes;
  }

  render() {
    if (this.props.recipes && this.props.recipes.length !== 0 ){
      return(
        <div>
          <AllRecipes recipes={ this.props.recipes }/>
          <Link to="/new_recipe">Create Recipe</Link>    
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

const mapStateToProps = state => {
  return { recipes: state.recipes.recipes}
}

export default MyRecipes = withRouter(connect(mapStateToProps, { fetchRecipes })(MyRecipes));
