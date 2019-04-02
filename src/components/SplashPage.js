import React from "react";
import SearchBar from "./SearchBar";
import "../css/SplashPage.css";

const SplashPage = () => {
  return (
    <section className="SplashPage">
      <h1>Queenly</h1>
      <SearchBar />
    </section>
  );
};

export default SplashPage;
