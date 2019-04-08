import React, { Component } from "react";
import Thumbnail from "./Thumbnail.js";

import "../css/SearchResults.css";

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="searchResults">
        <button
          className="toggle-close"
          onClick={this.props.displaySplashPage}
        >
          <i className="fas fa-times-circle" />
        </button>
        <h1>Search Results</h1>
        {this.props.searchResults.map(result => (
          <Thumbnail
            imgURL={result.imageURL}
            selectResult={this.props.selectSearchResult}
            name={result.name}
            key={result.id}
          />
        ))}
      </section>
    );
  }
}
