import React, { Component } from 'react';
import '../App.css';
import FilterControls from './FilterControls';
import Header from './Header';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      parades : [],
      restaurants : [],
    }
  }
  

  getData = (request) => {
    
    fetch(`http://whateverly-datasets.herokuapp.com/api/v1/${request}`)
    .then(response => response.json())
    .then(data => {
        this.setState({
          [request]: data[request]
        })
      })
      .catch(error => {
        throw new Error(error)
      });
  }



  componentDidMount() {
    this.getData('restaurants')
    this.getData('parades')
  }
  
  render() {
    return (
      <div className="entire-page">
        <Header />
        <FilterControls 
        parades={this.state.parades}
        restaurants={this.state.restaurants}
        />
      </div>
    );
  }
}

export default App;
