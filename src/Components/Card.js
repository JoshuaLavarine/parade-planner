import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <section>{this.props.filteredByLocation}</section>
      </div>
      
    )
  }
}


export default Card;