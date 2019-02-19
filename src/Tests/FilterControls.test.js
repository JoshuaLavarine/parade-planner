import React from 'react';
import FilterControls from '../Components/FilterControls';
import { shallow } from 'enzyme';

const parades = [
	{
		"name": "Krewe of Little Rascals",
		"location": "Metairie",
		"dayOrNight": "pm",
		"startTime": "12:00pm",
		"date": "2/17/2019",
		"themes": ["children", "cars", "family"],
		"numberOfFloats": 85,
		"id": 1,
		"img": "https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/jefferson/37872354-littlerascals2-jpg0_cc32794e-5056-a36a-08469bbb1ddece75.jpg"

	},
	{
		"name": "Krewe of Excalibur",
		"location": "Metairie",
		"dayOrNight": "am",
		"startTime": "7:00pm",
		"date": "2/22/2019",
		"themes": ["trucks", "floats", "medieval", "magic"],
		"numberOfFloats": 112,
		"id": 2,
		"img": "https://www.hlimg.com/images/events/738X538/25mardi6502_1546063931e.jpg"
	},
	{
		"name": "Krewe of Babylon",
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "5:30pm",
		"date": "2/28/2019",
		"themes": ["kings", "knights", "tradition", "legend"],
		"numberOfFloats": 35,
		"id": 3,
		"img": "https://d23xispzx43ico.cloudfront.net/wp-content/uploads/2015/02/0212-babylon-knights.jpg"
  }
]

describe('FilterControls', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FilterControls
      parades={parades}
      // restaurants={this.state.restaurants} 
      />
    )
  });

  it('should update the state when getClickedValue is called', () => {
    expect(wrapper.state('location')).toEqual( '' );
    wrapper.find('#location').simulate('change', { target: { value: 'Metairie', id: "location"}});
    expect(wrapper.state('location')).toEqual("Metairie");

    expect(wrapper.state('dayOrNight')).toEqual( '' );
    wrapper.find('#dayOrNight').simulate('change', { target: { value: 'AM', id: "dayOrNight"}});
    expect(wrapper.state('dayOrNight')).toEqual("AM");

    expect(wrapper.state('date')).toEqual( '' );
    wrapper.find('#date').simulate('change', { target: { value: '2/27/19', id: "date"}});
    expect(wrapper.state('date')).toEqual('2/27/19');
  });

  it('should filter the parades', () => {

  })

});

