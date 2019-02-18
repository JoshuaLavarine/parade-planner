import React, { Component } from 'react';
import '../Restaurant.css';

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
            <div className="img-and-name">
              <img className="rest-img" src={restaurant.img} />
              <a className="link" href={restaurant.website} target="_blank">{restaurant.name}</a>
            </div>
            <p className="themes">#{restaurant.cuisine.join(' #')}</p>
            <p className="rating">{restaurant.rating} Rating</p>
            <p className="distance">{restaurant.distance_to_parade} Distance to Parade</p>
            <p className="walk">{restaurant.walk_to_parade} Walk to Parade</p>
          </div>
          
        )
      })
     
    )
  }
}
export default Restaurant