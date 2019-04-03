import React from 'react';
import ReactDOM from 'react-dom';
import Sub_Info from '../components/Sub_Info.js';
import { shallow } from 'enzyme';

const [nameOfFunctionHere] = jest.fn();

describe('Sub_Info', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Sub_Info />
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