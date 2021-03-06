import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from '../components/Thumbnail.js';
import { shallow } from 'enzyme';

const mockResult = {
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

  it('should call setResult on click', () => {
    let setResultSpy = jest.spyOn(wrapper.instance(), "setResult");
    wrapper.instance().setResult(mockResult.name);
    expect(setResultSpy).toHaveBeenCalledWith("Sunday Social");
    expect(mockSelectSearchResult).toHaveBeenCalled();
  })
})