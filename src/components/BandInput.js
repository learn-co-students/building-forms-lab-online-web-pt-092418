// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
  }
    

  handleOnChange = event => {
    this.setState({
      band: event.target.value
    })
  }
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBandToParent(this.state.band)
  }
  //onSubmit={() => this.props.onSubmit( this.state.band)}
  
  render() {
    console.log(this.state)
    return(
      <div>
        
        <form onSubmit={this.handleOnSubmit}>
          band input:
          <input
            name="band"
            value={this.state.band}
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
