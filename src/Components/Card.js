import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <article>{this.props.name}</article>
      </div>
      
    )
  }
}


export default Card;