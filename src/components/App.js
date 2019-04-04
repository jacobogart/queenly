import React from "react";
import NavBar from "./NavBar";
import search from "../helpers.js";
import SplashPage from "./SplashPage";
import Card from './Card';
import SearchResults from './SearchResults'

// * CSS imports
import "../css/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      showCard: false,
      currentResult: null,
      showResults: false
    };
  }

  updateResults = query => {
    this.setState(
      {
        searchResults: search(query)
      },
    );
  };

  selectResult = resultName => {
    this.toggleCard();
    this.setState({
      currentResult: resultName   
    });
  };

  toggleCard = () => {
    let toggleSwitch = 
      this.state.showCard ? false : true;
    console.log("Switch", toggleSwitch)
    this.setState({
      showCard: toggleSwitch
    })
  }

  toggleResults = () => {
    this.setState({
      showResults: !this.showResults
    })
  }

  render() {
    let card;
    let searchResults;

    let cardComponent = 
      <Card result={this.state.currentResult}
        toggle={this.toggleCard} />

    let searchResultsPage = 
      <SearchResults 
        searchResults={this.state.searchResults} 
      />

    this.state.showCard
      ? card = cardComponent
      : card = null;

    this.state.showResults
      ? searchResults = searchResultsPage
      : searchResults = null;

    return (
      <div>
        <header className="navBar">
          <NavBar />
        </header>
        <section className="App">
          <article className="mainContent">
            <SplashPage
              toggleResults={this.toggleResults}
              updateResults={this.updateResults}
              selectResult={this.selectResult}
              searchResults={this.state.searchResults}
            />
            {card}
            {searchResults}
          </article>
          
        </section>
        <div className="appBackground" />
      </div>
    );
  }
}

export default App;
