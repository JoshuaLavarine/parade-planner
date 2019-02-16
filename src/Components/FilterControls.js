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

  getClickedLocation = (event) => {
    let selectedLocation = event.target.value;
    this.setState({
      location: selectedLocation
    }, this.filterByLocation)
  }

  
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

  getClickedDate = (event) => {
    let selectedDate = event.target.value;
    this.setState({
      date: selectedDate
    }, this.filterByDate)
  }

  filterByDate = () => {
    return this.props.parades.filter(parade => {
      return parade.date === this.state.date
    })
  }
  
 
  

  





  render() {
    return (
      <div>
        <CardContainer 
        filteredParadesLocation={this.filterByLocation()}
        filteredParadesDate={this.filterByDate()}
        filteredParadesTime={this.filterByTime()}
        />
        <select onChange={this.getClickedLocation}>
          <option value="">--Select Location--</option>
          <option value="Metairie">Metairie</option>
          <option value="Uptown New Orleans">Uptown New Orleans</option>
        </select>
        <select onChange={this.getClickedTime}>
          <option value="">--Select Time--</option>
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
        {/* We want to dynamically insert the dates rather than hard coding */}
        <select onChange={this.getClickedDate}>
          <option value="">--Select Date--</option>
          <option value="2/22/2019">2/22/2019</option>
        </select>
        <button> click me</button>
      </div>
    )
  }
}

export default FilterControls;