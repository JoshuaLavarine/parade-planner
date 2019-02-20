import React from 'react';
import CardContainer from '../Components/CardContainer';
import { shallow } from 'enzyme';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardContainer />
    )
  });
	
  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({ id: -1, isExpanded: false });
  });

  // testing toggleCard 
  it('should change state', () => {
    
  });

  // testing displayCards
  it('should have a proper default state', () => {

  });
});