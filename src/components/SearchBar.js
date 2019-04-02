import React, { Component } from "react";
import search from '../helpers.js';
import "../css/SearchBar.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: ''
    }
  }

  handleChange = (e) => {
    search(e.target.value);
    this.setState({
      searchQuery: e.target.value
    });
  }

  render() {
    return (
      <section className="searchBarContainer">
        <form className="SearchBar">
          <input 
            onChange={this.handleChange}
            type="search" 
            placeholder="Search..." 
            className="searchTerm" 
          />
          <button 
            type="submit" 
            className="searchButton">
            <i className="fas fa-search searchIcon" />
          </button>
        </form>
      </section>
    );
  }
}

export default SearchBar;
