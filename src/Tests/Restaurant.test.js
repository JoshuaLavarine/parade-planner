import React from 'react';
import Restaurant from '../Components/Restaurant';
import { shallow } from 'enzyme';

describe('Restaurant', () => {

  beforeEach(() => {
    wrapper = shallow(
      <Restaurant />
    )
  });

  it('should have the proper default state', () => {
    expect(wrapper.state).toEqual({})
  });

})