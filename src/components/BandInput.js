import React, { Component } from 'react';
import {addBand} from '../actions/bands';

class BandInput extends Component {

  state = {
    name: ""
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
    console.log(this.state)
  }

  handleSubmit = event => {
    event.preventDefault();
    const band = (this.state.name);
    this.props.addBand(band)
    this.setState({
      name: '',
    })
    console.log(this.state)
  }

  render() {
    return(
      <div>
         <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput;
