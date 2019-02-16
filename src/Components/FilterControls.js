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

  resetFilter = () => {
    this.setState({
      location: '',
      time: '',
      date: ''
    })
  }

  // showAllParades = () => {
  //   return this.props.parades.map(card => { 
  //     console.log("Mardi Gras")  
  //   return <article className="container">
  //         <img src={card.img} />
  //         <h3>{card.name}</h3>
  //         </article>
  // })
  // display parades as a returned div
    // this.setState({
    //   location: this.props.parades.location 
    // })
  // }




  render() {
    return (
      <div>
        <div className ="filters-section">
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
          <button onClick={this.resetFilter}>Reset Filters</button>
          <button onClick={this.showAllParades}>Show All</button>
        </div>
        <CardContainer 
        filteredParadesLocation={this.filterByLocation()}
        filteredParadesDate={this.filterByDate()}
        filteredParadesTime={this.filterByTime()}
        />
      </div>
    )
  }
}

export default FilterControls;