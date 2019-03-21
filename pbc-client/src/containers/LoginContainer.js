import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class LoginContainer extends Component {

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return(
      <div>
        <LoginForm handleSubmit={this.props.handleSubmit} />
      </div>
    )
  }
}

export default LoginContainer;
