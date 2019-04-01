import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props){
    super(props)

    this.state = {
      recipe: props.location.state
    }
  }

  render() {
    return(
      <div>
        This is a recipe
      </div>
    )
  }
}

export default Recipe;
