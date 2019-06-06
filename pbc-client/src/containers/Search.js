import React, { Component } from 'react';
import SearchResults from '../components/search/SearchResults';

class Search extends Component {
  state = {
    search: "",
    submitted: false,
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      submitted: true
    })
  }

  render(){
    if (this.state.submitted === true){
      return <SearchResults />
    }

    return(
      <section className="Search">
        <main className="ph4 black-80">

        <h1 className="tc f3 f2-m f1-l fw2 black-90 mv3">
          Search for Recipes!
        </h1>

          <form id="search-form" className="measure center" onSubmit={this.handleSubmit}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

              <div className="mt3">
                <label className="db fw6 lh-copy f6">What are you looking for:</label>
                <input
                  type="text"
                  name="search"
                  value={this.state.search}
                  onChange={this.handleChange}
                  className="b pa2 input-reset ba bg-transparent w-100"
                />
              </div>

            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib dark-green"
              type="submit" />
            </div>
          </form>
        </main>

        <div id="search-results">
          {SearchResults}
        </div>

      </section>
    )
  }
}

export default Search;
