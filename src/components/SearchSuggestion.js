import React, { Component } from "react";
import "../css/SearchSuggestion.css";

class SearchSuggestion extends Component {
  constructor(props) {
    super(props);
    // this.setResult = this.setResult.bind(this);
  }

  setResult = e => {
    this.props.selectResult(this.props.name);
  };

  render() {
    return <p onClick={e => this.setResult(e)}>{this.props.name}</p>;
  }
}

export default SearchSuggestion;
