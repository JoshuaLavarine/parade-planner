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
            <div>
              <img className="card-photo" src={card.img} />
              <h3>{card.name}</h3>
            </div>
            </article>
    })
  } else {
    return null
  }
}

    render() {
      return(
          <div>
           <section className = "card-container">
            {this.displayLocationCards()}
           </section>
          </div>
      )
  }     
}



export default CardContainer;