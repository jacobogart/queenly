import React from "react";
import "../css/SearchBar.css";
class SearchBar extends React.Component {
  render() {
    return (
      <section className="searchBarContainer">
        <form className="SearchBar">
          <input type="search" placeholder="Search..." className="searchTerm" />
          <button type="submit" className="searchButton">
            <i className="fas fa-search searchIcon" />
          </button>
        </form>
      </section>
    );
  }
}

export default SearchBar;
