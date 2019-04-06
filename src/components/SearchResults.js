import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';

import "../css/SearchResults.css";

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="searchResults">
        <button className="toggle-close" 
          onClick={this.props.toggleSplash}>X</button>
        <h1>Search Results</h1>
        {this.props.searchResults.map(result => 
          <Thumbnail 
            imgURL={result.imageURL}
            name={result.name}
            key={result.id}
          /> 
        )}
      </section>
    )
  }
}