import React from "react";
import SearchBar from "./SearchBar";
import "../css/SplashPage.css";

const SplashPage = props => {
  return (
    <section className="SplashPage">
      <h1>Queenly</h1>
      <SearchBar
        displayAllSearchResults={props.displayAllSearchResults}
        updateResults={props.updateResults}
        selectResult={props.selectResult}
        searchResults={props.searchResults}
        showSuggestions={props.showSuggestions}
      />
    </section>
  );
};

export default SplashPage;
