import React, { Component } from 'react';
import CardContainer from './CardContainer';
// import '../FilterControls.scss';

class FilterControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      dayOrNight: '',
      date: ''
    }
  }

  getClickedValue = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    }, this.filterParades)
  }

  filterParades = () => { 
    let keyArr = ['location', 'dayOrNight', 'date']
    let filteredParades = this.props.parades.filter(parade => {
      return keyArr.every(key => {
        return this.state[key] === parade[key] || this.state[key] === ''
      })
    })
    return filteredParades
  }

  resetFilter = () => {
    this.setState({
      location: '',
      dayOrNight: '',
      date: ''
    })
  }

  render() {
    return (
      <div>
        <div className ="filters-section">
              <div className="filters">
                <select className="filter" id="location" onChange={this.getClickedValue}>
                  <option value="">--Select Location--</option>
                  <option value="Metairie">Metairie</option>
                  <option value="Uptown New Orleans">Uptown New Orleans</option>
                </select>
                <select className="filter" id="dayOrNight" onChange={this.getClickedValue}>
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
              <div className="buttons">
              {/* <button className="filter-button"onClick={this.showAllParades}>Show All</button> */}
              <button className="filter-button"onClick={this.resetFilter}>RESET</button>
            </div>
            </div>
        </div>
        <CardContainer 
        filteredParades={this.filterParades()}
        parades={this.props.parades}
        restaurants={this.props.restaurants}

        />
      </div>
    )
  }
}

export default FilterControls;

