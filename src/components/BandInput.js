// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {
  state = {
    band: ''
  }

  handleOnChange = event => {
    this.setState({
      band: event.target.value
    })
  }
  handleOnSubmit = event => {
    event.preventDefault();
  }
  
  render() {
    return(
      <div>
        
        <form onSubmit={this.handleOnSubmit}>
          band input:
          <textarea 
            name="imput"
            value={this.state.band}
            onChange={(event) => this.handleOnChange(event)}
          />
          <button type="submit" >

          </button>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  addBand: formData => dispatch ({type: 'ADD_BAND', payload:formData})
}

export default connect(null, mapDispatchToProps)(BandInput);
