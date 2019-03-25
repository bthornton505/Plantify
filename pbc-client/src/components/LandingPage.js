import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage= () => {

  return(
    <div>
      <h1>Welcome to the Plant Based Chef!</h1>
      <p>We provide the easiest and way to track your favorite plant-based recipes and share them with friends and family.</p>
      <p>Not only can you create and save your fav recipes, but you can also explore our vast database of vegan/vegetarian recipes!</p>
      <p>If this sounds like something for you, sign up!</p>
      <Link to="/signup">Sign Up</Link>
      <br></br>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default LandingPage;
