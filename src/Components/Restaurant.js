import React from "react";

const Restaurant = (props) => {
  return(
    props.sortedRestaurants.map((restaurant, index) => {
      return (
        <div className="individual-restaurant" key={index}>
          <img src={restaurant.img} />
          <h5 className="rest-name">{restaurant.name}</h5>
          <p className="rest-tags">#{restaurant.cuisine.join(" #")}</p>
          <div className="restaurant-info">
            <p className="rest-lines"><span className="bold">Rating:</span> {restaurant.rating} / 5.0</p>
            <p className="rest-lines"><span className="bold">Distance:</span> {restaurant.distance_to_parade}</p>
            <p className="rest-lines"><span className="bold">Walk-time:</span> {restaurant.walk_to_parade}</p>
            <a className="rest-link" href={restaurant.website} target="_blank" rel="noopener noreferrer">{restaurant.name.toUpperCase()}</a>
          </div>
        </div> 
      );
    })     
  );
};

export default Restaurant;