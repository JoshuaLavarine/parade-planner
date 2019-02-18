import React, { Component } from 'react';

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return(
      this.props.sortedRestaurants.map(restaurant => {
        return (
          <div>
            <img src={restaurant.img} />
            <a href={restaurant.website} target="_blank">{restaurant.name.toUpperCase()}</a>
            <p>#{restaurant.cuisine.join(' #')}</p>
            <p>{restaurant.rating}</p>
            <p>{restaurant.distance_to_parade}</p>
            <p>{restaurant.walk_to_parade}</p>
          </div>
        )
      })
    )
  }
}
export default Restaurant