import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from '../components/Gallery.js';
import { shallow } from 'enzyme';

const [nameOfFunctionHere] = jest.fn();

describe('Gallery', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Gallery />
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