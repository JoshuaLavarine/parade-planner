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
  filterByLocation = () => {
    return this.props.parades.filter(parade => {
      return parade.location === this.state.location
    })
  }
  
  getClickedTime = (event) => {
    let selectedTime = event.target.value;
    this.setState({
      time: selectedTime
    }, this.filterByTime)
  }
  
  filterByTime = () => {
    return this.props.parades.filter(parade => {
      return parade.dayOrNight === this.state.time
    })
  }

 



  render() {
    return (
      <div>
        <CardContainer filteredParades={this.filterByLocation()}/>
        <button value="Metairie" onClick={this.getClickedLocation}>METARIE</button>
        <select onChange={this.getClickedTime}>
          <option value="">--Select Time--</option>
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
      </div>
    )
  }
}

export default FilterControls;