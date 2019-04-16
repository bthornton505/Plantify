import React, { Component } from 'react'

class Vote extends Component {
  state = {
    vote: 0
  }

  handleVote = event => {
    event.preventDefault()

    this.setState({
      vote: this.state.vote + 1
    })
  }


  render(){

    return(
      <div>
        <button onClick={this.handleVote}>+</button>
        {this.state.vote}
      </div>
    )
  }
}

export default Vote;
