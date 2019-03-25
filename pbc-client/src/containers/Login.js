import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
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
      this.props.history.push(`/user/${this.state.username}`)
      window.alert("You're Logged In!")
    } else {
      window.alert("Sorry, something went wrong. Please try logging in again.")
    }
  }

  render() {
    return(
      <div>
      <br></br>
      Login!
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              />
          </p>
          <p>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              />
          </p>
          <p>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
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

export default Login = withRouter(connect(null, { authenticate })(Login));
