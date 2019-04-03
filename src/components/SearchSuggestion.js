import React, { Component } from "react";
import "../css/SearchSuggestion.css";

class SearchSuggestion extends Component {
  constructor(props) {
    super(props)


  }

  render() {
    return (
        <p>{this.props.name}</p>
    );
  }
}

export default SearchSuggestion;