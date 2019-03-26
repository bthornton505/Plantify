import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AllRecipes from '.../components/recipes/AllRecipes';

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user,
      recipes: []
    }
  }

  // handleLogout = e => {
  //   e.preventDefault()
  //   this.props.logout();
  //   this.props.history.push('/')
  // }

  // componentDidMount = () => {
  //   this will mount all of the users recipes and display them
  // }

  render() {
    return(
      <div>
        <h1>User Profile</h1>
        <div>
          <p>
            <label>Username: </label>
            {this.props.user.username}
          </p>
          <p>
            <label>Email: </label>
            {this.props.user.email}
          </p>
          <AllRecipes recipes={this.prop.recipe}/>
          <Link to="/new_recipe">Create Recipe</Link>
        </div>
      </div>
    );
  }
}

export default UserProfile;
