import React, { Component } from 'react';
// import paradeData from './paradeData'

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <select>
          <option>{props.location}</option>
          <option>{props.name}</option>
        </select>
      </div>
    )
  }
}


export default Filter;