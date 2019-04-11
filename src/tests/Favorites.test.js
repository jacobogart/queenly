import React from "react";
import Favorites from "../components/Favorites";
import { shallow } from "enzyme";

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

const mockDisplayAllSearchResults = jest.fn();
const mockDisplayAllOfType = jest.fn();

describe('Favorites', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Favorites
        displayAllSearchResults={mockDisplayAllSearchResults}
        displayAllOfType={mockDisplayAllOfType}
      />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call showFavorites on click", () => {
    let faveSpy = jest.spyOn(wrapper.instance(), "showFavorites");
    wrapper.instance().showFavorites();
    expect(faveSpy).toHaveBeenCalled();
    expect(mockDisplayAllSearchResults).toHaveBeenCalled();
    expect(mockDisplayAllOfType).toHaveBeenCalled();
  });
})

