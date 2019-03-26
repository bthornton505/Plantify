import React, { Component } from 'react';

class RecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      description: "",
      ingredients: [],
      cuisine: "",
      userId: this.props.user_id
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    
  }

  render() {
    // const { title, description, ingredients, cuisine, user } = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Cuisine: </label>
            <input
              type="text"
              name="cuisine"
              value={this.state.cuisine}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Ingredient: </label>
            <input
              type="text"
              name="ingredients"
              // value={this.state.ingredients}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Ingredient: </label>
            <input
              type="text"
              name="ingredients"
              // value={this.state.ingredients}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Ingredient: </label>
            <input
              type="text"
              name="ingredients"
              // value={this.state.ingredients}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Ingredient: </label>
            <input
              type="text"
              name="ingredients"
              // value={this.state.ingredients}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Description: </label>
            <textarea
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </p>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default RecipeForm;
