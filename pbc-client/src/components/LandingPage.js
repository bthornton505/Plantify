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
          Plantify is a work in progress with some features soon to come:
        </p>
          <ul className="list pl0 measure center">
            <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
              Ability to search database of vegan/vegetarian recipes
            </li>
            <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
              Take these found recipes and save them to your favorites
            </li>
            <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
              Be able to email full recipe to friends and family
            </li>
          </ul>
        <p className="f5 f4-m f3-l fw2 black-80 mt0 lh-copy">
          If this sounds like something for you, <Link className="f5 f4-m f3-l fw4 black link hover-dark-green" to="signup">sign up!</Link>
        </p>
      </div>

    </main>
  )
}

export default LandingPage;
