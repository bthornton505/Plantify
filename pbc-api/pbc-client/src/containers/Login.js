import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../actions/authActions';

class Login extends Component {

  state = {
    email: "",
    password: "",
  };


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    // This will authenticate the users credentials and distribute jwt token on success
    if (this.props.authenticate(this.state)) {
    // user will be redirected to profile on success
      this.props.history.push(`/user_profile`)
      window.alert("You're Logged In!")
    } else {
      // Need to add validations for when this doesn't work
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
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib dark-green"
            type="submit" />
          </div>
        </form>
      </main>
    )
  }
}

export default connect(null, { authenticate })(Login);
