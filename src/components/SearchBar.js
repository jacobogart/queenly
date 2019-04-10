import React, { Component } from "react";
import SearchSuggestion from "./SearchSuggestion";
import "../css/SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    }
  }

  handleChange = e => {
    if (e.target !== undefined) {
      this.props.updateSearchResults(e.target.value);
      this.setState({
        searchQuery: e.target.value,
      });
    } else {
      this.hideSuggestions();
    }
  }

  findResults = e => {
    e.preventDefault();
    this.props.displayAllSearchResults();
    this.hideSuggestions();
  }

  hideSuggestions = () => {
    this.searchInput.value = '';
    // this.props.hideSearchSuggestions();
  }

  render() {
    return (
      <section
        className="searchBarContainer"
        tabIndex="0"
        onBlur={this.hideSuggestions}
        onMouseLeave={this.props.hideSearchSuggestions}
        ref={el => (this.searchContainer = el)}
      >
        <form onSubmit={this.findResults} className="SearchBar">
          <input
            onChange={this.handleChange}
            ref={el => (this.searchInput = el)}
            type="search"
            placeholder="Search..."
            className="searchTerm"
          />
          <button type="submit" className="searchButton">
            <i className="fas fa-search searchIcon" />
          </button>
        </form>
        <div
          className="searchHolder"
          style={{
            display: this.props.displaySearchSuggestions ? "block" : "none"
          }}
        >
          {this.props.searchResults.slice(0, 5).map(result => (
            <SearchSuggestion
              {...this.props}
              name={result.name}
              selectSearchResult={this.props.selectSearchResult}
              key={result.id}
              hideSuggestions={this.hideSuggestions}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchBar;