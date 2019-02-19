import React, { Component } from 'react';
import Restaurant from './Restaurant';
// import "../Card.scss";


class Card extends Component {
  constructor() {
    super();
  }
  

  render() {
    const displayCard = this.props.parades.filter((parade) => {
      return parade.id == this.props.id
    })
    const sortRestaurants = this.props.restaurants.filter((restaurant) => {
      return restaurant.location == displayCard[0].location
    })
        
    return(
      <div className = "pop-up">
      <div className="pop-up-inner">
        <div className="parade-section">
          <button onClick={this.props.toggle}>X</button>
          <h1>{displayCard[0].name}</h1>
          <img className="parade-image" src={displayCard[0].img}/>
          <p className="parade-location">{displayCard[0].location}</p>
          <p className="parade-date">{displayCard[0].date} | {displayCard[0].startTime}</p>
          <p>Number of Floats: {displayCard[0].numberOfFloats}</p>
        </div> 
        <h2>Restaurant's Near By!</h2>
          <div className="restaurant-container">
            <Restaurant sortedRestaurants={sortRestaurants}/>
          </div>
        </div>
      </div>
    )
  }
}
        


      


export default Card;