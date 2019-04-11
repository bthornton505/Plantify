import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../actions/authActions';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    const { username, email, password } = this.state
    const user = { username: username, email: email, password: password}

    if (this.props.signup(user)) {
      this.props.history.push(`/user_profile`)
      window.alert(`Thank you for signing up ${user.username}!`)
    } else {
      window.alert("We're having issues creating your account.")
    }
  }

  render() {
    return(
      <main class="pa4 black-80">
        <form class="measure center" onSubmit={this.handleSubmit}>
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Sign Up</legend>

            <div class="mt3">
              <label class="db fw6 lh-copy f6">Username: </label>
              <input
                class="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                />
            </div>

            <div class="mt3">
              <label class="db fw6 lh-copy f6">Email: </label>
              <input
                class="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
            </div>

            <div class="mt3">
              <label class="db fw6 lh-copy f6">Password: </label>
              <input
                class="b pa2 input-reset ba bg-transparent w-100"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
            </div>

            <div class="mt3">
              <label class="db fw6 lh-copy f6">Password Confirmation: </label>
              <input
                class="b pa2 input-reset ba bg-transparent w-100"
                type='password'
                name="password_confirmation"
                value={ this.state.password_confirmation }
                onChange={ this.handleChange }
              />
            </div>
          </fieldset>
          <div class="">
            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" />
          </div>
        </form>
      </main>
    )
  }
}

export default Signup = withRouter(connect(null, { signup })(Signup));
