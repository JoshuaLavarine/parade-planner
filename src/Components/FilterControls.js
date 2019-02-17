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
      matchedIds: []
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
    let matchedIds = [];
    let matchedObjects = this.returnMatchingObjects();

    parades.forEach(parade => {
      if (!matchedObjects.includes(parade) && 
      parade.location === location || 
      parade.dayOrNight === time ||
      parade.date === date)
      {
        matchedObjects.push(parade);
        matchedIds.push(parade.id);
        this.setState({ matchedIds });
      }
    });
  }

  returnMatchingObjects = () => {
    return this.props.parades.reduce((acc, parade) => {
      this.state.matchedIds.forEach(id => {
        if (parade.id === id) {
          acc.push(parade)
          console.log(parade)
        }
    })
      return acc
    }, [])
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

