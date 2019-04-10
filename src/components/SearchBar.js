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
    if (e.target.value) {
      this.props.updateSearchResults(e.target.value);
      this.setState({
        searchQuery: e.target.value,
      });
    } else {
      console.log('empty')
      this.hideSuggestions();
    }
  }

  findResults = e => {
    e.preventDefault();
    this.props.displayAllSearchResults();
    this.hideSuggestions();
  }

  hideSuggestions = e => {
    this.props.hideSearchSuggestions();
    this.searchInput.value = '';
  }

  render() {
    return (
      <section className="searchBarContainer">
        <form onSubmit={this.findResults} className="SearchBar">
          <input
            onKeyUp={this.handleChange}
            ref={el => this.searchInput = el}
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