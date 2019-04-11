import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
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
    if (this.props.authenticate(this.state)) {
      this.props.history.push(`/user_profile`)
      window.alert("You're Logged In!")
    } else {
      window.alert("Sorry, something went wrong. Please try logging in again.")
    }
  }

  render() {
    return(
      <main class="pa4 black-80">
        <form class="measure center" onSubmit={this.handleSubmit}>
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Login</legend>

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

          </fieldset>
          <div class="">
            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" />
          </div>
        </form>
      </main>
    )
  }
}

export default Login = withRouter(connect(null, { authenticate })(Login));
