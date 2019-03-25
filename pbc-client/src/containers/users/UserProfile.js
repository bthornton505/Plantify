import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link, withRouter } from "react-router-dom";

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user
    }
  }

  // handleLogout = e => {
  //   e.preventDefault()
  //   this.props.logout();
  //   this.props.history.push('/')
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
        </div>
      </div>
    );
  }
}

export default UserProfile
