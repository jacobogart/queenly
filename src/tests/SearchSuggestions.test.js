import React from "react";
import SearchSuggestion from "../components/SearchSuggestion";
import { shallow } from "enzyme";

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
        selectResult={this.props.selectResult}
        key={result.id}
      />
    );
  });

  it("should match the snapshot with all the data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should on click set the result to be the prop.name clicked");
});
