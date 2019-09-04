// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
  }
}

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBandToParent(this.state.name)
  }
  //onSubmit={() => this.props.onSubmit( this.state.band)}
  
  render(){
    console.log(this.state)
    return(
      <div>
        
        <form onSubmit={this.handleOnSubmit}>
          band input:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <button type="submit" >

          </button>
        </form>
      </div>
    )
  }
}


export default (BandInput);
