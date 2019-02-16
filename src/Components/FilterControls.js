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
 
  advanceFilter = (event) => {
    event.preventDefault()
    const {location,time,date} = this.state
    let info = {location,time,date}
    this.props.parades.reduce((acc,curr) => {
      
      let object = {location: curr.location,
                    time: curr.dayOrNight, 
                    date: curr.date}
                    console.log(object, info, "heyy")
      if(object == info){
        console.log('heyy')
        acc.push(curr);

        
      }
      
      
      return acc;
    },[])
  }
  
 
  

  





  render() {
    return (
      <div>
        <CardContainer 
        filteredParadesLocation={this.filterByLocation()}
        filteredParadesDate={this.filterByDate()}
        filteredParadesTime={this.filterByTime()}
        />
        <form onSubmit = {this.advanceFilter}>
        <select onChange= {event => {
          this.setState({
            location: event.target.value
            
          })
        }} >
          <option value="">--Select Location--</option>
          <option value="Metairie">Metairie</option>
          <option value="Uptown New Orleans">Uptown New Onprleans</option>
        </select>
        <select onChange={event => {
          this.setState({
            time: event.target.value
          })
        }}>
          <option value="">--Select Time--</option>
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
        {/* We want to dynamically insert the dates rather than hard coding */}
        <select onChange={event => {
          this.setState({
            date: event.target.value
          })
        }}>
          <option value="">--Select Date--</option>
          <option value="2/22/2019">2/22/2019</option>
        </select>
        <button> click me</button>
        </form>
      </div>
    )
  }
}

export default FilterControls;