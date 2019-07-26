import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import BandsList from './BandsList';
import { connect } from 'react-redux'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <hr/>
        <BandInput />
        <br/>
        <BandsList bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
