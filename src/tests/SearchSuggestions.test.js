import React from "react";
import SearchSuggestion from "../components/SearchSuggestion";
import { shallow } from "enzyme";

const setResult = jest.fn();
const hideSuggestions = jest.fn();
const selectResult = jest.fn();
const result = {
  category: "viewing party",
  dayOfWeek: "Thursday",
  frequency: "weekly",
  host: ["Dixie Lynn Cartwright", "DiDa Ritz"],
  id: 1201,
  reoccuring: true,
  startTime: 2000,
  name: "Chicago's RuPaul's Drag Race Season 11 Viewing Party"
};

describe("SearchSuggestion", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchSuggestion
        name={result.name}
        selectSearchResult={selectResult}
        key={result.id}
        hideSuggestions={hideSuggestions}
      />
    );
  });

  it("should match the snapshot with all the data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should on click set the result to be the prop.name clicked", () => {
    const mockEvent = {target: {value: result.name}};

    wrapper.find('.SuggestionsContainer').simulate('click', mockEvent);

    expect(setResult).toHaveBeenCalled();
  });
});
