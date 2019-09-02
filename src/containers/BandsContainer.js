import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { connect } from 'react-redux';
import { addBand } from '../actions/bands'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
          <ul>
            <Bands bands={this.props.bands}/>
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

export default connect(mapStateToProps, {addBand})(BandsContainer)
