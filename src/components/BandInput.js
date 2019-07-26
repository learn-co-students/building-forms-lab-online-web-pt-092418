// Add BandInput component
import React, { Component } from 'react'
import { addBand } from '../actions/bands'
import{ connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name:''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name<input type='text' value={this.state.name} onChange={this.handleOnChange}/></label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addBand})(BandInput);
