import React, { Component } from 'react';

class SignupForm extends Component {

  handleSubmit = event => {
    event.preventDefault()
    if (this.props.signup(this.state)) {
      this.props.history.push('/user_profile')
      window.alert("Thank you for signing up!")
    } else {
      window.alert("We're having issues creating your account.")
    }
  }

  render() {
    return(
      <div>
      Sign Up!
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
      </div>
    )
  }
}

export default SignupForm;
