import React, { Component } from 'react';
import Card from './Card'

class CardContainer extends Component {
  constructor(){
      super();
  }


   displayLocationCards = () => {
     console.log('fire')
     if(this.props.filteredParadesLocation){
     return this.props.filteredParadesLocation.map((card)=> { 
        console.log(card)   
      return <li>{card.name}</li>
    })
  } else {
    return null
  }
}

    render() {
      return(
          <div>
           <ul>
            {this.displayLocationCards()}
           </ul>
          </div>
      )
  }     
}



export default CardContainer;