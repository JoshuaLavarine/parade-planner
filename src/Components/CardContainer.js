import React, { Component } from 'react';
import Card from './Card';
import '../CardContainer.css';


class CardContainer extends Component {
  constructor(){
      super();
      this.state = {
          isExpanded: false
      }
  }
  toggleCard = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

   displayCards = () => {
     if (this.props.filteredParades) {
     return this.props.filteredParades.map(card => { 
      return <article className="container">
            <div className="individual-card" onClick={this.toggleCard} >
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
      console.log(this.props.filteredParades)
      return(
          <div>
           <section className = "card-container">
            {this.displayCards()}
           </section>
          </div>
      )
  }     
}



export default CardContainer;