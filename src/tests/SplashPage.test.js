import React from "react";
import SplashPage from "../components/SplashPage";
import { shallow } from "enzyme";

let displayAllSearchResults,
  updateSearchResults,
  selectSearchResult,
  hideSearchSuggestions,
  updateQuery;

describe("<SplashPage />", () => {
  it("should render correctly.", () => {
    const wrapper = shallow(
      <SplashPage
        displayAllSearchResults={displayAllSearchResults}
        updateSearchResults={updateSearchResults}
        selectSearchResult={selectSearchResult}
        searchResults={[]}
        displaySearchSuggestions={true}
        hideSearchSuggestions={hideSearchSuggestions}
        updateQuery={updateQuery}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
