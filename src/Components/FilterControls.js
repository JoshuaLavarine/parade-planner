import React, { Component } from 'react';
import Filter from './Filter'
import paradeData from './paradeData';

class FilterControls extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Filter />
      </div>
    )
  }
}

export default FilterContainer;