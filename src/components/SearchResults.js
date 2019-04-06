import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';

import "../css/SearchResults.css";

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="searchResults">
        <h1>Search Results</h1>
        {this.props.searchResults.map(result => (
          <Thumbnail
            imgURL={result.imageURL}
            selectResult={this.props.selectResult}
            name={result.name}
          />
        ))}
      </section>
    );

  }
}