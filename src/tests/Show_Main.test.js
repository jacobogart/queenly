import React from 'react';
import ReactDOM from 'react-dom';
import Show_Main from '../components/Show_Main.js';
import { shallow } from 'enzyme';

const [nameOfFunctionHere] = jest.fn();

describe('Show_Main', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Show_Main />
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