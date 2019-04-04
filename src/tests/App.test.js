import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';
import { shallow } from 'enzyme';

// const [nameOfFunctionHere] = jest.fn();

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      searchResults: [],
      showCard: false,
      currentResult: null
    });
  });

  it('should setState, searchResults, to an array of names', () => {
    expect(wrapper.state('searchResults')).toEqual([]);
// todo: figure out how to simulate this test
    // const query = {
    //   target: [`Roscoe's Tavern`, `Roscoe's Bar`]
    // };

    // wrapper.instance().updateResults(query);
    // expect(wrapper.state('searchResults').length).toEqual(query.length);
  });

  it('should define current result when selectResult is invoked, and toggle card', () => {
    expect(wrapper.state('showCard')).toEqual(false);
    expect(wrapper.state('currentResult')).toEqual(null);

    const resultName = {
      target: `Roscoe's Tavern`
    };

    wrapper.instance().selectResult(resultName);
    expect(wrapper.state('showCard')).toEqual(true);
    expect(wrapper.state('currentResult')).toEqual(resultName);
  });
});