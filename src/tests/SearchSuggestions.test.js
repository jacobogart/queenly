import React from "react";
import SearchSuggestion from "../components/SearchSuggestion";
import { shallow } from "enzyme";

const mockSelectSearchResult = jest.fn();
const mockResult = {
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
        name={mockResult.name}
        selectSearchResult={mockSelectSearchResult}
        key={mockResult.id}
      />
    );
  });

  it("should match the snapshot with all the data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should on click set the result to be the prop.name clicked", () => {
    let setResultSpy = jest.spyOn(wrapper.instance(), 'setResult');
    wrapper.instance().setResult()
    expect(setResultSpy).toHaveBeenCalled();
    expect(mockSelectSearchResult).toHaveBeenCalledWith(
      "Chicago's RuPaul's Drag Race Season 11 Viewing Party"
    );
  });
});
