import React, { Component } from 'react';
import {connect} from 'react-redux';
import Band from '../components/Band'

class BandsList extends Component {

  listBands = () => this.props.bands.map((band, index) => <Band key={index} name={band.name} />)

  render () {
    return (
      <div>
        <h4>Bands List:</h4>
        <ul>
          {this.listBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsList)
