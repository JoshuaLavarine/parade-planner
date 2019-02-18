import React, { Component } from 'react';
import Card from './Card';
import '../CardContainer.css';


class CardContainer extends Component {
  constructor(){
      super();
      this.state = {
          isExpanded: false,
          id: -1
          
      }
  }
  
  toggleCard = (event) => {
    console.log(event.target)
    this.setState({
      isExpanded: !this.state.isExpanded,
      id: event.target.name
    }, this.displayCards)
  }

   displayCards = () => {
     if (this.props.filteredParades) {
     return this.props.filteredParades.map(card => { 
      return <article className="container" name={card.id} >
            <div className="individual-card" onClick={this.toggleCard} name={card.id}>
              <img className="card-photo" src={card.img} name={card.id}/>
              <h3 name={card.id}> {card.name} </h3>
            </div>
            </article>
    })
  } else {
    return null
  }
}

    render() {
      
      switch(this.state.isExpanded){
        case(true):
        return <Card 
          parades={this.props.parades}
          restaurants={this.props.restaurants}
          id={this.state.id}
          toggle={this.toggleCard}
          />
        default:
          return(
            <div>
            <section className = "card-container">
              {this.displayCards()}
            </section>
            </div>
      )
    }
  }     
}



export default CardContainer;