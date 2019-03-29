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
      this.props.history.push(`/user/${user.username}`)
      window.alert(`Thank you for signing up ${user.username}!`)
    } else {
      window.alert("We're having issues creating your account.")
    }
  }

  render() {
    return(
      <div>
      <br></br>
      Sign Up!
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
          <p>
            <label>Password Confirmation: </label>
            <input
              type='password'
              name="password_confirmation"
              value={ this.state.password_confirmation }
              onChange={ this.handleChange }
            />
          </p>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Signup = withRouter(connect(null, { signup })(Signup));
