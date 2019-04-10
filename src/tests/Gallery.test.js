import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from '../components/Gallery.js';
import { shallow } from 'enzyme';

const selectSearchResult = jest.fn();
const bars=[];
const queens=[];
const cardType = "Show";
const cardData = {
  "category": "drag show",
  "dayOfWeek": "Sunday",
  "frequency": "weekly",
  "host": ["Chamilla Foxx"],
  "id": 2101,
  "imageURL": "https://pbs.twimg.com/media/D1Any4VWkAA86HL.jpg",
  "reoccuring": true,
  "startTime": [1400],
  "name": "Sunday Social"
}

describe('Gallery', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Gallery 
      cardData={cardData}
      cardType={cardType}
      selectSearchResult={selectSearchResult}
      bars={bars}
      queens={queens}
      />
    );
  });

  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({});
  });
})