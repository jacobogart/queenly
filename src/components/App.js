import React from "react";
import SplashPage from "./SplashPage";
import search from "../helpers.js";
// * CSS imports
import "../css/App.css";
import NavBar from "./NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    };
  }

  updateResults = query => {
    this.setState(
      {
        searchResults: search(query)
      },
      console.log(this.state.searchResults)
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <header className="navBar">
          <NavBar />
        </header>
        <section className="App">
          <article className="mainContent">
            <SplashPage 
              updateResults={this.updateResults}
              searchResults={this.state.searchResults} 
            />
          </article>
        </section>
        <div className="appBackground" />
      </div>
    );
  }
}

export default App;
