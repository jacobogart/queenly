import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card.js';
import { shallow } from 'enzyme';

const [nameOfFunctionHere] = jest.fn();

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card />
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      // Put state here
    });
  });
})