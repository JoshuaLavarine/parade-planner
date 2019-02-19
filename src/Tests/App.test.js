// App component does not take in any props, so we do not need to create any mock data. 
// The other components did need mock data because the components needed props.

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '../Components/App';
import { shallow } from 'enzyme';


// Do we need mock data here?
const mockData = [
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
		"location": "Uptown New Orleans",
		"dayOrNight": "pm",
		"startTime": "7:00pm",
		"date": "2/22/2019",
		"themes": ["trucks", "floats", "medieval", "magic"],
		"numberOfFloats": 112,
		"id": 2,
		"img": "https://www.hlimg.com/images/events/738X538/25mardi6502_1546063931e.jpg"
	}
]

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
	});
	
	it('should render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App/>, div);
		ReactDOM.unmountComponentAtNode(div);
	})

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({ parades: [], restaurants: [] });
	});
	

  // it('should get update state when getData is called', () => {
	// 	expect(wrapper.state()).toEqual({ parades: [], restaurants: [] });
	// 	fetch('http://whateverly-datasets.herokuapp.com/api/v1/restaurants') = jest.fn()
	// 	getData(restaurants);
		
	// });
	
	it('should call getData with correct parameters', () => {
		const getData = jest.fn()
		wrapper.instance().getData('restaurants')
		expect(getData).toHaveBeenCalled(1)
	})
});