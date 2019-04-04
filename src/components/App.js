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
  };

  selectResult = resultName => {
    if (this.state.showSplash) {
      this.toggleCard();
    }
    this.setState({
      currentResult: resultName,
      showSplash: false,
      cardData: search(resultName, this.state.bars, this.state.queens)[0]
    });
  };

  toggleCard = () => {
    this.setState({
      showCard: !this.state.showCard
    });
  };

  toggleResults = () => {
    this.setState({
      showResults: !this.showResults
    })
  }

  render() {
    let searchResults;
    
    let searchResultsPage = 
      <SearchResults 
        searchResults={this.state.searchResults} 
      />

    this.state.showResults
      ? searchResults = searchResultsPage
      : searchResults = null;

    let card = null;
    let cardComponent = (
      <Card
        cardData={this.state.cardData}
        toggle={this.toggleCard}
        bars={this.state.bars}
        queens={this.state.queens}
      />
    );
    
    this.state.showCard ? (card = cardComponent) : (card = null);

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
