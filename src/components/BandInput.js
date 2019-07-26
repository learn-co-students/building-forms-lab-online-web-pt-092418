// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  render() {
    return(
      <div>
        <form>
          <label>Band Name<input type='text'/></label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
