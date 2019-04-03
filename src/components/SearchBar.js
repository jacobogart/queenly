import React, { Component } from "react";
import SearchSuggestion from './SearchSuggestion';
import "../css/SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  handleChange = (e) => {
    this.props.updateResults(e.target.value);
    this.setState({
      searchQuery: e.target.value
    });
  }

  render() {
    console.log(this.props)
    return (
      <section className="searchBarContainer">
        <form className="SearchBar">
          <input
            onKeyUp={this.handleChange}
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
          style={{ display: this.state.searchQuery ? 'block' : 'none' }}>
          {this.props.searchResults.map(result => {
              return <SearchSuggestion
                name={result.name}
                key={result.id}
              />
            })
            .slice(0, 5)}
        </div>  
      </section>
    );
  }
}

export default SearchBar;
