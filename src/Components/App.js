import React, { Component } from 'react';
import '../App.css';
import paradeData from '../paradeData';
import restaurantData from '../restaurantData';
import FilterControls from './FilterControls';

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
        <h1>PARADE PLANNER</h1>
        <FilterControls 
        parades={this.state.parades}
        restaurants={this.state.restaurants}
        />
      </div>
    );
  }
}

export default App;
