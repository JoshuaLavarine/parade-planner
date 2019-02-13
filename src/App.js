import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import FilterContainer from './FilterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <CardContainer />
      <FilterContainer />
      </div>
    );
  }
}

export default App;
