import React, { Component } from "react";
import "../css/SearchSuggestion.css";

class SearchSuggestion extends Component {
  constructor(props) {
    super(props)
  }

  setResult = () => {
    this.props.method(this.props.name)
  }

  render() {
    return (
        <p onClick={this.setResult}>{this.props.name}</p>
    );
  }
}

export default SearchSuggestion;