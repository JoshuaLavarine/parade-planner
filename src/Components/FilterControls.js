import React, { Component } from 'react';
import CardContainer from './CardContainer';
import '../FilterControls.css';

class FilterControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      time: '',
      date: '',
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


  grabDates = () => {
    let datesArray = this.props.parades.reduce((acc, currentParade) => {
      if(!acc.includes(currentParade.date)){
        acc.push(currentParade.date)
      }
      return acc
    },[])
    return datesArray
  }

 



  render() {
    return (
      <div>
        <div className ="filters-section">
          <div className="buttons">
              <button className="filter-button"onClick={this.showAllParades}>Show All</button>
              <button className="filter-button"onClick={this.resetFilter}>Reset Filters</button>
            </div>
              <div className="filters">
                <select className="filter" onChange={this.getClickedLocation}>
                  <option value="">--Select Location--</option>
                  <option value="Metairie">Metairie</option>
                  <option value="Uptown New Orleans">Uptown New Orleans</option>
                </select>
                <select className="filter" onChange={this.getClickedTime}>
                  <option value="">--Select Time--</option>
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              <select className="filter" onChange={this.getClickedDate}>
                <option value="">--Select Date--</option>
                {this.props.parades.reduce((acc, currentParade) => {
                  if(!acc.includes(currentParade.date)){acc.push(currentParade.date)}
                    return acc
                  },[]).map((name)=> {
                    return (<option value={[name]}>{[name]}</option>)
                  })
                }
              </select>
            </div>
        </div>
        <CardContainer 
        filteredParadesLocation={this.filterByLocation()}
        filteredParadesDate={this.filterByDate()}
        filteredParadesTime={this.filterByTime()}
        dates={this.grabDates()}
        />
      </div>
    )
  }
}

export default FilterControls;

