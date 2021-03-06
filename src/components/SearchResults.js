import React, { Component } from "react";
import Thumbnail from "./Thumbnail.js";

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let results;

    if (this.props.searchResults.length === 0) {
      results = 
        <h2>No results found.</h2>
    } else {
      results = this.props.searchResults.map(result => (
        <Thumbnail
          imgURL={result.imageURL}
          selectSearchResult={this.props.selectSearchResult}
          name={result.name}
          key={result.id}
        />
      ))
    }

    if (this.props.searchQuery) {
      var resultsHeader = <h3>Search results for: '{this.props.searchQuery}'</h3>
    } 

    return (
      <section className="searchResults">
        <button
          className="toggle-close"
          onClick={this.props.displaySplashPage}
        >
          <i className="fas fa-times-circle" />
        </button>
        <section className="results">{results}</section>
      </section>
    );
  }
}
