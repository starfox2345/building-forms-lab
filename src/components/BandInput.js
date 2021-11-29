// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  handleSubmitChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          onChange={event => this.handleSubmitChange(event)}
          value={this.state.name}>
        </input>
        <button type="submit">Add Band</button>
      </form>
    )
  }
}

export default BandInput
