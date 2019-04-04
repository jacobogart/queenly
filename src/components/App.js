import React from "react";
import NavBar from "./NavBar";
import search from "../helpers.js";
import SplashPage from "./SplashPage";
import Card from './Card';
// * CSS imports
import "../css/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      showCard: false,
      currentResult: null
    };
  }

  updateResults = query => {
    this.setState(
      {
        searchResults: search(query)
      },
      // ? console.log(this.state.searchResults)
    );
  };
  selectResult = resultName => {
    // console.log("id", target);
    this.setState({
      showCard: true,
      currentResult: resultName   
    });
  };

  render() {
    let card = null;
    this.state.showCard
     ? card = <Card result={this.state.currentResult} />
     : card = null;
    // ? console.log(this.state);
    return (
      <div>
        <header className="navBar">
          <NavBar />
        </header>
        <section className="App">
          <article className="mainContent">
            <SplashPage
              updateResults={this.updateResults}
              selectResult={this.selectResult}
              searchResults={this.state.searchResults}
            />
          </article>
          {card}
        </section>
        <div className="appBackground" />
      </div>
    );
  }
}

export default App;
