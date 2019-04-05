import React, { Component } from "react";
import "../css/SearchSuggestion.css";

class SearchSuggestion extends Component {
  constructor(props) {
    super(props);
  }

  setResult = e => {
    this.props.selectResult(this.props.name);
  };

  render() {
    return (
      <div className="SuggestionsContainer">
        <p onClick={e => this.setResult(e)}>{this.props.name}</p>
      </div>
    );
  }
}

export default SearchSuggestion;
