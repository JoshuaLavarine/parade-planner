import React, { Component } from 'react';
import Restaurant from './Restaurant';
import "../Card.css";


class CardDetails extends Component {
  constructor() {
    super();
  }
  

  render() {
    // const displayCard = this.props.parades.filter((parade) => {
    //   return parade.id == this.props.id
    // })
    // console.log(displayCard, "heyy")
    const{parade,restaurants,toggle} = this.props
    const sortRestaurants = restaurants.filter((res) => {
      return res.location == parade.location
    })
        
    return(
      <div className = "pop-up">
        <button onClick={toggle}>X</button>
        <h1>{parade.name}</h1>
        <img src={parade.img}/>
        <p>location: {parade.location}</p>
        <p>{parade.date} | {parade.startTime}</p>
        <p>Number of Floats: {parade.numberOfFloats}</p>
        {/* <div className="> */}
          <div className="restaurant-container">
              <Restaurant sortedRestaurants={sortRestaurants}/>
          </div>
        {/* </div> */}
      </div>
    )
  }
}
        


      


export default CardDetails;