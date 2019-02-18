import React, { Component } from 'react';

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return(
      this.props.sortedRestaurants.map(restaurant => {
        return (<p>{restaurant.name}</p>)
      })
    )
  }
}
export default Restaurant