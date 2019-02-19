import React, { Component } from 'react';
import CardDetails from './CardDetails';
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
     return this.props.filteredParades.map(parade => { 
       return <Card
            parade={parade}
            toggle={this.toggleCard}
            />
        
            
            
   
    })
  } else {
    return null
  }
}

    render() {
      const parade = this.props.filteredParades.find((parade) => {
       return parade.id == this.state.id;
      })
      switch(this.state.isExpanded){
        case(true):
        return (
          <CardDetails
            parade={parade}
            restaurants={this.props.restaurants}
            
            toggle={this.toggleCard}
            />)
        default:
          return(
            // <div>
              <section className = "card-container">
                {this.displayCards()}
              </section>
            // </div>
      )
    }
  }     
}



export default CardContainer;