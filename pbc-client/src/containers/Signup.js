import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <main className="pa4 black-80">
        <form className="measure center" onSubmit={this.handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Username: </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Email: </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Password: </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6">Password Confirmation: </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type='password'
                name="password_confirmation"
                value={ this.state.password_confirmation }
                onChange={ this.handleChange }
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

export default connect(null, { signup })(Signup);
