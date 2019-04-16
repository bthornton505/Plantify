import React, { Component } from 'react';
import { connect } from 'react-redux'
import { checkToken } from './actions/authActions';
import Routes from './routes/Routes'


class App extends Component {

  componentWillMount = () => {
    // This conditional will check the users auth_token after they have logged in and make sure they are authenticated
    // looks in localStorage for a token and if true, it authenticates the token
    if (localStorage.getItem("auth_token")) {
      this.props.checkToken(localStorage.getItem("auth_token"))
    // if that fails it will check the window location, if location is anywhere but login, signup, or /
    // it will clear the token and redirect to the login
    } else if (!window.location.href.includes('login') && !window.location.href.includes('signup') && !(window.location.pathname === '/')) {
      localStorage.clear()
      window.location.href = "/login"
    }
  }

  render() {
    const {isAuthenticated, user} = this.props
    console.log(isAuthenticated)

    return (
      <Routes isAuthenticated={isAuthenticated} user={user}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.currentUser,
  }
}

export default connect(mapStateToProps, { checkToken })(App);
