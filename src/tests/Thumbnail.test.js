import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from '../components/Thumbnail.js';
import { shallow } from 'enzyme';

const mockResult = {
      "category": "drag show",
      "dayOfWeek": "Sudnay",
      "frequency": "weekly",
      "host": ["Chamilla Foxx"],
      "id": 2101,
      "imageURL": "https://pbs.twimg.com/media/D1Any4VWkAA86HL.jpg",
      "reoccuring": true,
      "startTime": [1400],
      "name": "Sunday Social"
    }

const mockSelectSearchResult = jest.fn();

describe('Thumbnail', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Thumbnail 
        imgURL={mockResult.imageURL}
        selectSearchResult={mockSelectSearchResult}
        name={mockResult.name}
        key={mockResult.id} />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should have default state', () => {
    expect(wrapper.state()).toEqual({
      // Put state here
    });
  });
})