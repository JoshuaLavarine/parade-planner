import React, { Component } from 'react';
import Card from './Card';
import '../CardContainer.css';


class CardContainer extends Component {
  constructor(){
      super();
  }

  displayFilteredCards = () => {
    //display all the filtered cards
  }

   displayLocationCards = () => {
     console.log('fire')
     if (this.props.filteredParadesLocation) {
     return this.props.filteredParadesLocation.map(card => { 
        console.log(card)  
      return <article className="container">
            <div className="individual-card">
              <img className="card-photo" src={card.img} />
              <h3>{card.name}</h3>
            </div>
            </article>
    })
  } else {
    return null
  }
}
displayTimeCards = () => {
  console.log('fire')
  if (this.props.filteredParadesTime) {
  return this.props.filteredParadesTime.map(card => { 
     console.log(card)  
   return <article className="container">
         <div className="individual-card">
           <img className="card-photo" src={card.img}/>
           <h3>{card.name}</h3>
         </div>
         </article>
 })
} else {
 return null
}
}


displayDateCards = () => {
  console.log('fire')
  if (this.props.filteredParadesDate) {
  return this.props.filteredParadesDate.map(card => { 
     console.log(card)  
   return <article className="container">
         <div className="individual-card">
           <img className="card-photo" src={card.img}/>
           <h3>{card.name}</h3>
         </div>
         </article>
 })
} else {
 return null
}
}

  displayAllFilterd = () => {

  }

    render() {
      return(
          <div>
           <section className = "card-container">
            {this.displayLocationCards()}
            {this.displayTimeCards()}
            {this.displayDateCards()}
           </section>
          </div>
      )
  }     
}



export default CardContainer;