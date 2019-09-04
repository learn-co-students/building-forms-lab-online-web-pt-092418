import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import {addBand} from '../actions/bands';

class BandsContainer extends Component {
  takeInBandFromChild = (name) => {
    this.props.addBand(name)
  }
  render() {
    return(
      <div>
        
        
        < BandInput addBandToParent={this.takeInBandFromChild}/>
      </div>
    )
  }
}



const mapStateToProps = (state) =>{
  return {name: state.name};
}
// const mapDispatchToProps = dispatch => { 
//  return  {addBand: formData => dispatch({type: 'ADD_BAND', payload:formData})}
// }
//export default connect(mapStateToProps, mapDispatchToProps) (BandsContainer)
 export default connect(mapStateToProps, {addBand}) (BandsContainer)
