import React, { Component } from "react";

class SearchSuggestion extends Component {
  constructor(props) {
    super(props);
  }

  setResult = () => {
    this.props.selectSearchResult(this.props.name);
    this.props.hideSuggestions();
  };

  render() {
    return (
      <div className="SuggestionsContainer">
        <p onClick={this.setResult}>
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default SearchSuggestion;
