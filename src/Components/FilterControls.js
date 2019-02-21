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
          <form>
              <div className="filters">
                <select className="filter" id="location" onChange={this.getClickedValue} >
                  <option value="" selected="selected">--Select Location--</option>
                  <option value="Metairie">Metairie</option>
                  <option value="Uptown New Orleans">Uptown New Orleans</option>
                </select>
                <select className="filter" id="dayOrNight" onChange={this.getClickedValue}>
                  <option value="" selected="selected">--Select Time--</option>
                  <option value="am">AM</option>
                  <option value="pm">PM</option>
                </select>
              <select className="filter" id="date" onChange={this.getClickedValue}>
                <option value="" selected="selected">--Select Date--</option>
                {this.props.parades.reduce((acc, currentParade) => {
                  if(!acc.includes(currentParade.date)){acc.push(currentParade.date)}

                  acc.sort((date1, date2) => {
                    date1 = date1.split('-').reverse().join('');
                    date2 = date2.split('-').reverse().join('');
                    return date1.localeCompare(date2);
                });
                    return acc;
                },[]).map((name, index)=> {
                    return (<option key={index} value={[name]}>{[name]}</option>)
                })
                }
              </select>
              <div className="buttons">
                <button className="filter-button" onClick={this.resetFilter} type="reset">RESET</button>
              </div>
            </div>
          </form>
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

