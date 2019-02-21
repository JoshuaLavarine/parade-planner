import React, { Component } from "react";
import Restaurant from "./Restaurant";


class Card extends Component {

  render() {
    const displayCard = this.props.parades.filter((parade) => {
      return parade.id == this.props.id;
    });
    const sortRestaurants = this.props.restaurants.filter((restaurant) => {
      return restaurant.location == displayCard[0].location;
    });
        
    return(
      <div className = "pop-up">
        <div className="pop-up-inner">
          <div className="parade-section">
            <button onClick={this.props.toggle}>X</button>
            <h1 className="card-name">{displayCard[0].name}</h1>
            <div className="pop-up-container">
              <div className="pop-up-photo">
                <img className="parade-image" src={displayCard[0].img}/>
              </div>
              <div className="loc-date-float">
                <p className="parade-location"><span className="located-in">Located in</span>{displayCard[0].location}</p>
                <p className="parade-date">{displayCard[0].date} | {displayCard[0].startTime}</p>
                <p className="num-floats">Number of Floats: {displayCard[0].numberOfFloats}</p>
              </div>
            </div>
          </div> 
          <h2>Restaurants Nearby:</h2>
          <div className="restaurant-container">
            <Restaurant sortedRestaurants={sortRestaurants}/>
          </div>
        </div>
      </div>
    );
  }
}
        


      


export default Card;