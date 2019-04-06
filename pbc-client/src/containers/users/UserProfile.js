import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user,
    }
  }

  handleLogout = () => {
    this.props.logout()
    localStorage.clear()
    this.props.history.push('/login')
  }

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
        </div>
        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  }
}

export default UserProfile = withRouter(connect(null, { logout })(UserProfile));

// {this.props.user.recipes === 0 ?
//   <Link to="/new_recipe">Create Recipe</Link> : <Link to="/my_recipes">My Recipes</Link>}
