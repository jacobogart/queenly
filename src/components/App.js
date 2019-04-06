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
      currentResult: null,
      showCard: false,
      showResults: false,
      showSplash: true,
      cardComponent: null

    };
  }

  componentDidMount() {
    fetch(
      "https://fe-apps.herokuapp.com/api/v1/whateverly/1901/jacobogart/bars"
    )
      .then(response => response.json())
      .then(data => this.setState({ bars: data.bars }))
      .catch(err => console.log(err));
    fetch(
      "https://fe-apps.herokuapp.com/api/v1/whateverly/1901/jacobogart/queens"
    )
      .then(response => response.json())
      .then(data => this.setState({ queens: data.queens }))
      .catch(err => console.log(err));
  }

  updateResults = query => {
    this.setState({
      searchResults: search(query, this.state.bars, this.state.queens)
    });
  }

  selectResult = resultName => {
    if (this.state.showSplash) {
      this.toggleCard();
    }
    this.setState({
      currentResult: resultName,
      showSplash: false,
      cardData: search(resultName, this.state.bars, this.state.queens)[0]
    });
  }

  toggleCard = () => {
    this.setState({
      showCard: true,
      showResults: false,
      showSplash: false
    });
  }

  toggleResults = () => {
    this.setState({
      showCard: false,
      showResults: true,
      showSplash: false
    });
  }

  toggleSplash = () => {
    this.setState({
      showCard: false,
      showResults: false,
      showSplash: true
    });
  }

  render() {
    let card;

    let cardComponent = 
      <Card
        cardData={this.state.cardData}
        toggleCard={this.toggleCard}
        toggleSplash={this.toggleSplash}
        bars={this.state.bars}
        queens={this.state.queens}
      />

    let searchResultsComponent = 
      <SearchResults 
        searchResults={this.state.searchResults}
        toggleResults={this.toggleResults}
      />

    let splashPageComponent =
      <SplashPage
        toggleSplash={this.toggleResults}
        updateResults={this.updateResults}
        selectResult={this.selectResult}
        searchResults={this.state.searchResults}
      />

    if (this.state.showSplash) {
      card = splashPageComponent
    } else if (this.state.showResults) {
      card = searchResultsComponent
    } else {
      card = cardComponent
    }

    // this.state.showResults
    //   ? searchResults = searchResultsPage
    //   : searchResults = null;
    
    // this.state.showCard 
    //   ? card = cardComponent
    //   : card = null;

    // this.state.showResults
    //   ? splashPage = splashPageComponent
    //   : splashPage = null;

    return (
      <div>
        <header className="navBar">
          <NavBar
            searchBarDisplay={this.state.showCard}
            updateResults={this.updateResults}
            selectResult={this.selectResult}
            searchResults={this.state.searchResults}
          />
        </header>
        <section className="App">
          <article className="mainContent">
            {card}
          </article>
          
        </section>
        <div className="appBackground" />
      </div>
    );
  }
}

export default App;
