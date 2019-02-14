import React, { Component } from 'react';
import CardContainer from './CardContainer';

class FilterControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      time: '',
      date: ''
    }
  }

  //Write methods to filter out data based state strings
  //Methods will RETURN our derrived data and pass down to child component

  getClickedLocation = (event) => {
    let selectedLocation = event.target.value;
    this.setState({
      location: selectedLocation
    }, this.filterByLocation)
  }
//this second argument is telling the getClickedLocation to set the state before it runs the method, so that we can grab what we thing were grabbing(all the objects)
  filterByLocation = ()=> {
    return this.props.parades.filter((parade)=>{
      return parade.location === this.state.location
    })
  }
 



  render() {
    return (
      <div>
        <CardContainer filteredParades={this.filterByLocation()}/>
        <button value="Metairie" onClick={this.getClickedLocation}>METARIE</button>
      </div>
    )
  }
}

export default FilterControls;