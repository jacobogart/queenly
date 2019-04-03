import React from "react";
import SearchBar from "./SearchBar";
import "../css/SplashPage.css";

const SplashPage = (props) => {
  return (
    <section className="SplashPage">
      <h1>Queenly</h1>
      <SearchBar
        methods={props.methods}
        searchResults={props.searchResults}
      />
    </section>
  );
};

export default SplashPage;
