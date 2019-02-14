import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import FilterContainer from './FilterContainer';
import paradeData from './paradeData';
import restaurantData from './restaurantData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      parades : paradeData.parades,
      restaurants : restaurantData.restaurants
    }
  }
  
  render() {
    return (
      <div className="App">
      <FilterContainer location={this.state.parades} />
      <CardContainer />
      </div>
    );
  }
}

export default App;
