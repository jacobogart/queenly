import React, { Component } from "react";
import "../css/SearchSuggestion.css";

class SearchSuggestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: this.props.code,
      currentResult: null
    }
  }

  setResult = e => {
    console.log('test', this.state.code)
    this.props.method(this.state.code)
  }

  render() {
    return (
        <p onClick={this.setResult}>{this.props.name}</p>
    );
  }
}

export default SearchSuggestion;