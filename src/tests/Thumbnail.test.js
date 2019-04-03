import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from '../components/Thumbnail.js';
import { shallow } from 'enzyme';

const [nameOfFunctionHere] = jest.fn();

describe('Thumbnail', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Thumbnail />
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