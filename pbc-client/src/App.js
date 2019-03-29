import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Recipe from './containers/Recipe';
import LandingPage from './components/LandingPage';
import UserProfile from './containers/users/UserProfile'
import { checkToken } from './actions/authActions';

import './App.css';

class App extends Component {

  componentWillMount = () => {
    if (localStorage.getItem("auth_token")) {
      this.props.checkToken(localStorage.getItem("auth_token"))
    } else if (!window.location.href.includes('login') && !window.location.href.includes('signup') && !(window.location.pathname === '/')) {
      localStorage.clear()
      window.location.href = "/login"
    }
  }

  render() {
    console.log("App is loading")
    const {isAuthenticated, user} = this.props

    const guestViews = (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </div>
    )

    const userViews = (
      <div>
        <h1>Plant Based Chef</h1>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/user/:username" render={() => <UserProfile user={user} />} />
        <Route exact path="/new_recipe" render={() => <Recipe user={user} />} />
      </div>
    )
    console.log(isAuthenticated)
    return (
      <Router>
        {isAuthenticated ? userViews : guestViews}
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { checkToken })(App);
