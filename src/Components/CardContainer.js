import React, { Component } from 'react';
import Card from './Card';
import '../CardContainer.css';


class CardContainer extends Component {
  constructor(){
      super();
  }


   displayLocationCards = () => {
     console.log('fire')
     if (this.props.filteredParadesLocation) {
     return this.props.filteredParadesLocation.map(card => { 
        console.log(card)  
      return <article className="container">
            <img src={card.img} />
            <h3>{card.name}</h3>
            </article>
    })
  } else {
    return null
  }
}

    render() {
      return(
          <div>
           <section>
            {this.displayLocationCards()}
           </section>
          </div>
      )
  }     
}



export default CardContainer;