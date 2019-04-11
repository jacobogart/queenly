import React from "react";
import SearchBar from "./SearchBar";

const SplashPage = props => {
  return (
    <section className="SplashPage">
      <h1>Queenly</h1>
      <SearchBar {...props} />
    </section>
  );
};

export default SplashPage;
