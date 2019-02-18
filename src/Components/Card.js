import React, { Component } from 'react';
import Restaurant from './Restaurant.js';


class Card extends Component {
  constructor() {
    super();
  }
  

  render() {
    const displayCard = this.props.parades.filter((parade) => {
      return parade.id == this.props.id
    })
    const sortRestaurants = this.props.restaurants.filter((res) => {
      return res.location == displayCard[0].location
    })
        
    return(
      <div >
        <button onClick={this.props.toggle}>X</button>
        <h1>{displayCard[0].name}</h1>
        <img src={displayCard[0].img}/>
        <p>location: {displayCard[0].location}</p>
        <p>{displayCard[0].date} | {displayCard[0].startTime}</p>
        <p>Number of Floats: {displayCard[0].numberOfFloats}</p>
        <Restaurant sortedRestaurants={sortRestaurants}/>
      </div>
    )
  }
}
        


      


export default Card;