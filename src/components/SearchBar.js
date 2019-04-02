import React, { Component } from "react";
import "../css/SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      searchQuery: e.target.value
    }, this.props.updateResults(this.state.searchQuery));
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
