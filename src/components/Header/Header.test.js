import React from 'react';
import { shallow } from 'enzyme';
import Header from './';

describe('Header', () => {
  it('has the correct class', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.hasClass('header')).toEqual(true);
  }); 
});