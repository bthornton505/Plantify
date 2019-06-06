import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: "",
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <section className="Search">
        <h1>Search for Recipes!</h1>

        <form id="search-form">
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </section>
    )
  }
}

export default Search;
