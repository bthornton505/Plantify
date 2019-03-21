import React, { Component } from 'react';

class LoginForm extends Component {

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>Username: </label>
          <input
            type="text"
            />
        </p>
        <p>
          <label>Email: </label>
          <input
            type="text"
            />
        </p>
        <p>
          <label>Password: </label>
          <input
            type="password"
            />
        </p>
        <input
          type="submit"
          />
      </form>
    )
  }
}

export default LoginForm;
