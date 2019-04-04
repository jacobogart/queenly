import React, { Component } from "react";
import "../css/SearchSuggestion.css";

class SearchSuggestion extends Component {
  constructor(props) {
    super(props)
  }

  setResult = () => {
    this.props.selectResult(this.props.name)
  }

  render() {
    return (
        <p onClick={this.setResult}>{this.props.name}</p>
    );
  }
}

export default SearchSuggestion;