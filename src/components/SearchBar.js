import React, { Component } from "react";
import SearchSuggestion from "./SearchSuggestion";
import "../css/SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
  }

  handleChange = e => {
    this.props.updateResults(e.target.value);
    this.setState({
      searchQuery: e.target.value
    });
  };

  findResults = e => {
    e.preventDefault();
    this.props.displayAllSearchResults();
  };

  render() {
    return (
      <section className="searchBarContainer">
        <form onSubmit={this.findResults} className="SearchBar">
          {/* We cant click the submit button, we can only click the search results */}
          <input
            onKeyUp={this.handleChange}
            type="search"
            placeholder="Search..."
            className="searchTerm"
          />
          {/* button isnt used currently */}
          <button type="submit" className="searchButton">
            <i className="fas fa-search searchIcon" />
          </button>
        </form>
        <div
          className="searchHolder"
          style={{ display: this.props.showSuggestions ? "block" : "none" }}
        >
          {this.props.searchResults.slice(0, 5).map(result => (
            <SearchSuggestion
              name={result.name}
              selectResult={this.props.selectResult}
              key={result.id}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchBar;
