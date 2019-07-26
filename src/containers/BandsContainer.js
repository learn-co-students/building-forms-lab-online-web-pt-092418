import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import BandsList from './BandsList';
import { connect } from 'react-redux'
import { addBand } from '../actions/bands'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <h4>Add Band name: </h4>

        <BandInput addBand={this.props.addBand} />
        <hr/>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: dispatch({type: "ADD_BAND", band})
//   }
// }

export default connect(mapStateToProps, {addBand})(BandsContainer)
