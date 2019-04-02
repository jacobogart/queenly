import React from "react";
import SplashPage from "./SplashPage";
import search from '../helpers.js'
import "../css/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    }
  }

  updateResults = (query) => {
    this.setState({
      searchResults: search(query)
    }, console.log(this.state.searchResults))
  }

  render() {
    return (
      <section className="App">
        <article className="header">
          <SplashPage
            updateResults={this.updateResults} />
        </article>
      </section>
    );
  }
}

export default App;
