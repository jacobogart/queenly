import React from 'react';
import ReactDOM from 'react-dom';
import Bar_Main from '../components/Bar_Main.js';
import { shallow } from 'enzyme';

const [nameOfFunctionHere] = jest.fn();

describe('Bar_Main', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Bar_Main />
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