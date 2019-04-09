import React from 'react';
import Show_Main from '../components/Show_Main.js';
import { shallow } from 'enzyme';

let cardDataMock = {
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

describe('Show_Main', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Show_Main 
        cardData={cardDataMock} />
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
// TODO Write test that checks convertTime() & convertWhen()
})