import React, { Component } from 'react';

class Bands extends Component {

  bandsList = () => this.props.bands.map((band, index) =>
    <li key={index}>{band.name}</li>)

  render () {
    return(
      <div>{this.bandsList()}</div>
    )
  }
}

export default Bands;
// import React from 'react';
//
// const Bands = (props) => {
//   return (
//     <li>{props.band}</li>
//   );
// }
//
// export default Bands;
