import React from 'react';
import { Link } from 'react-router-dom'

const LandingPage= () => {

  return(
    <main>

      <div className="tc ph4">
        <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
          Welcome to the Plantify!
        </h1>

        <p className="f5 f4-m f3-l fw2 black-80 mt0 lh-copy">
          We provide the easiest way to track your favorite plant-based recipes and share them with friends and family.
        </p>
        <p className="f5 f4-m f3-l fw2 black-80 mt0 lh-copy">
          Not only can you create and save your favorite recipes, but you can also explore our vast database of vegan/vegetarian recipes!
        </p>
        <p className="f5 f4-m f3-l fw2 black-80 mt0 lh-copy">
          If this sounds like something for you, <Link className="f5 f4-m f3-l fw4 black link hover-dark-green" to="signup">sign up!</Link>
        </p>
      </div>

    </main>
  )
}

export default LandingPage;
