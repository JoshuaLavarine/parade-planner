import React, { Component } from 'react';
import Card from './Card'

class CardContainer extends Component {
  constructor(){
      super();
  }

    render() {
      return(
          <div>
              <Card />
          </div>
      )
  }     
}



export default CardContainer;