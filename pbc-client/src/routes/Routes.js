import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation'
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import MyRecipes from '../containers/recipes/MyRecipes';
import RecipeForm from '../components/recipes/RecipeForm';
import EditRecipeForm from '../components/recipes/EditRecipeForm';
import Recipe from '../components/recipes/Recipe'
import Search from '../containers/Search';
import SearchResults from '../components/search/SearchResults';
import About from '../components/About';
import LandingPage from '../components/LandingPage';
import UserProfile from '../components/UserProfile'

const Routes = props => {

  const guestViews = (
    <div>
      <Navigation isAuthenticated={props.isAuthenticated}/>

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/search" component={Search} />
        <Route exact path='/search/results' component={SearchResults} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>

    </div>
  )

  const userViews = (
    <div>
      <Navigation isAuthenticated={props.isAuthenticated}/>

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/search" component={Search} />
        <Route exact path='/search/results' component={SearchResults} />
        <Route exact path="/about" component={About} />
        <Route exact path="/user_profile" render={() => <UserProfile user={props.user} />} />
        <Route exact path="/my_recipes" component={MyRecipes} />
        <Route exact path="/new_recipe" render={() => <RecipeForm user={props.user} />} />
        <Route exact path="/recipe/:id" component={Recipe} />
        <Route exact path="/recipe/:id/edit" render={() => <EditRecipeForm user={props.user} />} />
      </Switch>

    </div>
  )

  return(
    <Router>
      {props.isAuthenticated ? userViews : guestViews}
    </Router>
  )
}

export default Routes;
