import React, { Component } from 'react';
import CardContainer from './CardContainer';

class FilterControls extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      time: '',
      date: ''
    }
  }

  //Write methods to filter out data based state strings
  //Methods will RETURN our derrived data and pass down to child component

  render() {
    return (
      <div>
        <CardContainer />
      </div>
    )
  }
}

export default FilterControls;