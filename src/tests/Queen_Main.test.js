import React from 'react';
import ReactDOM from 'react-dom';
import Queen_Main from '../components/Queen_Main.js';
import { shallow } from 'enzyme';

const [nameOfFunctionHere] = jest.fn();

describe('Queen_Main', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Queen_Main />
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