import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import {addBand} from '../actions/bands';

class BandsContainer extends Component {
  takeInBandFromChild = (name) => {
    this.props.addBand({name})
  }
    render() {
      const bandList = this.props.bands.map(band => <li>{band.name}</li>);
    return(
      <div>
        <ul>
          {bandList}
        </ul>
        
        <BandInput addBandToParent={(name) => this.takeInBandFromChild(name)}/>
      </div>
    )
  };
}



const mapStateToProps = (state) =>{
  return {bands: state.bands};
}
// const mapDispatchToProps = dispatch => { 
//  return  {addBand: formData => dispatch({type: 'ADD_BAND', payload:formData})}
// }
//export default connect(mapStateToProps, mapDispatchToProps) (BandsContainer)
 export default connect(mapStateToProps, {addBand}) (BandsContainer)
