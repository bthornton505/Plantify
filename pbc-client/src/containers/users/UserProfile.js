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
      <div className="tc ph4">
        <h1 className="f3 f2-m f1-l fw2 black-90 mv3">Welcome back, {user.username}!</h1>
        <div>
          <p className="f5 f4-m f3-l fw2 black-80 mt0 lh-copy">
            Have any new recipes for us?
          </p>
        </div>
      </div>
    );
  }
}

export default UserProfile = withRouter(connect(null, { logout })(UserProfile));
