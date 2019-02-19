import React, { Component } from 'react';
// import '../Restaurant.scss';

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return(
      
      this.props.sortedRestaurants.map(restaurant => {
        return (
          <div className="individual-restaurant">
            <img src={restaurant.img} />
            <h5 className="rest-name">{restaurant.name}</h5>
            <p className="rest-tags">#{restaurant.cuisine.join(' #')}</p>
            <div className="restaurant-info">
              <p>{restaurant.rating}</p>
              <p>{restaurant.distance_to_parade}</p>
              <p>{restaurant.walk_to_parade}</p>
              <a className="rest-link" href={restaurant.website} target="_blank">{restaurant.name.toUpperCase()}</a>
            </div>
          </div> 
        )
      })     
    )
  }
}
export default Restaurant