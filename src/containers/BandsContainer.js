import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import BandsList from './BandsList'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <hr/>
        <BandInput />
        <br/>
        <BandsList />
      </div>
    )
  }
}

export default BandsContainer
