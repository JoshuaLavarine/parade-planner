import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    const displayCard = this.props.parades.filter((parade) => {
     
      console.log(this.props.toggle, 'heyy')
      return parade.id == this.props.id
    })
    
    return(
      <div>
        <button onClick={this.props.toggle}>X</button>
        <h1>{displayCard[0].name}</h1>
        <img src={displayCard[0].img}/>
        <p>location: {displayCard[0].location}</p>
        <p>{displayCard[0].date} | {displayCard[0].time}</p>
        <p>Number of Floats: {displayCard[0].numberOfFloats}</p>
      </div>
      )
  }
}
        


      


export default Card;