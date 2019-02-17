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

  getClickedValue = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    }, this.filterParades)
  }

  filterParades = () => { 
    const { location, time, date } = this.state;
    const { parades } = this.props;
     return parades.filter(parade=> {
      return parade.date === date 
    }).parades.filter(parade=> {
      return parade.location === location 
    }).parades.filter(parade=> {
      return parade.dayOrNight === time 
    })
  }
  
  filterByLocation = () => {
    return this.props.parades.filter(parade => {
      return parade.location === this.state.location
    })
  }
  
  filterByTime = () => {
    return this.props.parades.filter(parade => {
      return parade.dayOrNight === this.state.time
    })
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

  render() {
    return (
      <div>
        <div className ="filters-section">
          <div className="buttons">
              <button className="filter-button"onClick={this.showAllParades}>Show All</button>
              <button className="filter-button"onClick={this.resetFilter}>Reset Filters</button>
            </div>
              <div className="filters">
                <select className="filter" id="location" onChange={this.getClickedValue}>
                  <option value="">--Select Location--</option>
                  <option value="Metairie">Metairie</option>
                  <option value="Uptown New Orleans">Uptown New Orleans</option>
                </select>
                <select className="filter" id="time" onChange={this.getClickedValue}>
                  <option value="">--Select Time--</option>
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              <select className="filter" id="date" onChange={this.getClickedValue}>
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
        filteredParades={this.filterParades()}
        />
      </div>
    )
  }
}

export default FilterControls;

