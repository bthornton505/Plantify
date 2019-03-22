import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: this.state.user
    }
  }

  render() {
    return(
      <div>
        User Profile
      </div>
    );
  }
}

export default UserProfile;
