import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Navigation from './routes/Navigation'
import Footer from './routes/Footer'
import MyRecipes from './containers/recipes/MyRecipes';
import RecipeForm from './components/recipes/RecipeForm';
import Recipe from './components/recipes/Recipe'
import About from './components/About';
import LandingPage from './components/LandingPage';
import UserProfile from './containers/users/UserProfile'
import { checkToken } from './actions/authActions';

import './App.css';

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
    console.log("App is loading")
    const {isAuthenticated, user} = this.props

    const guestViews = (
      <div>
        <Navigation isAuthenticated={isAuthenticated}/>

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>


      </div>
    )

    const userViews = (
      <div>
        <Navigation isAuthenticated={isAuthenticated}/>

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user_profile" render={() => <UserProfile user={user} />} />
          <Route exact path="/my_recipes" render={() => <MyRecipes user={user} />} />
          <Route exact path="/new_recipe" render={() => <RecipeForm user={user} />} />
          <Route exact path="/recipe/:id" component={Recipe} />
        </Switch>


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
    user: state.auth.currentUser,
  }
}

export default connect(mapStateToProps, { checkToken })(App);
