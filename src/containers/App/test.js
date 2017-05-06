import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './';

describe('App', () => {
  it('has the correct class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.hasClass('App')).toEqual(true);
  }); 
});