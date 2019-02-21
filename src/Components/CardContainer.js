import React, { Component } from 'react';
import Card from './Card';

class CardContainer extends Component {
  constructor(){
      super();
      this.state = {
        id: -1,
        isExpanded: false
      }
  }

  toggleCard = (event) => {
    this.setState({
      isExpanded: !this.state.isExpanded,
      id: event.target.name
    })
  }

   displayCards = () => {
     if (this.props.filteredParades.length) {
     return this.props.filteredParades.map((card, index) => { 
      return <article className="container" name={card.id} key={index}>
            <div className="individual-card" name={card.id}>
              <img onClick={this.toggleCard} className="card-photo" src={card.img} name={card.id}/>
              <h3 className="card-title" name={card.id}> {card.name} </h3>
            </div>
            </article>
    })
  } else {
    return <h3 className="no-results">No Parades Match Your Search Criteria</h3>
  }
}

    render() {
      
      switch(this.state.isExpanded){
        case(true):
        return (
        <div className="screen">
        <div className="card-thing">
          <Card 
            parades={this.props.parades}
            restaurants={this.props.restaurants}
            id={this.state.id}
            toggle={this.toggleCard}
            />
        {/* <section className = "card-container">
          {this.displayCards()}
        </section> */}
        </div>
        </div>
        )
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