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
      <main className="pa4 black-80">
        <form className="measure center" onSubmit={this.handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Login</legend>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Email</label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Password</label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
            </div>

          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib dark-green" type="submit" />
          </div>
        </form>
      </main>
    )
  }
}

export default Login = withRouter(connect(null, { authenticate })(Login));
