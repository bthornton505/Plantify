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

  render() {
    const { user } = this.props

    return(
      <div class="tc ph4">
        <h1 class="f3 f2-m f1-l fw2 black-90 mv3">Welcome back, {user.username}!</h1>
        <div>
          <p>
            <label>Username: </label>
            {user.username}
          </p>
          <p>
            <label>Email: </label>
            {user.email}
          </p>
        </div>
      </div>
    );
  }
}

export default UserProfile = withRouter(connect(null, { logout })(UserProfile));
