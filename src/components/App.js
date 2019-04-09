import React from "react";
import NavBar from "./NavBar";
import { search, searchBars, searchShows, searchQueens } from "../helpers.js";
import SplashPage from "./SplashPage";
import Card from "./Card";
import SearchResults from "./SearchResults";

// * CSS imports
import "../css/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showCardPage: false,
      showAllResultsPage: false,
      showSplashPage: true,
      displaySearchSuggestions: false,
      searchResults: [],
      currentResult: null,
      bars: [{ shows: [] }],
      queens: []
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

  updateSearchResults = query => {
    this.setState({
      displaySearchSuggestions: true,
      searchResults: search(query, this.state.bars, this.state.queens)
    });
  };

  selectSearchResult = resultName => {
    if (this.state.showSplashPage || this.state.showAllResultsPage) {
      this.displayCard();
    }

    this.setState({
      currentResult: resultName,
      showSplashPage: false,
      cardData: search(resultName, this.state.bars, this.state.queens)[0],
      displaySearchSuggestions: false
    });
  };

  displayCard = () => {
    this.setState({
      showCardPage: true,
      showAllResultsPage: false,
      showSplashPage: false
    });
  };

  displayAllSearchResults = () => {
    this.setState({
      showCardPage: false,
      showAllResultsPage: true,
      showSplashPage: false,
      displaySearchSuggestions: false
    });
  };

  displayAllOfType = (type) => {
    if (type === "Venues") {
      this.setState({
        searchResults: searchBars('', this.state.bars)
      });
    } else if (type === "Shows") {
      this.setState({
        searchResults: searchShows('', this.state.bars)
      });
    } else if (type === "Queens") {
      this.setState({
        searchResults: searchQueens('', this.state.queens)
      });
    }
  }

  displaySplashPage = () => {
    this.setState({
      showCardPage: false,
      showAllResultsPage: true,
      showSplashPage: true
    });
  };

  render() {
    let card;

    let cardComponent = (
      <Card
        cardData={this.state.cardData}
        displaySplashPage={this.displaySplashPage}
        bars={this.state.bars}
        queens={this.state.queens}
        selectSearchResult={this.selectSearchResult}
      />
    );
    let searchResultsComponent = (
      <SearchResults
        displaySplashPage={this.displaySplashPage}
        searchResults={this.state.searchResults}
        selectSearchResult={this.selectSearchResult}
      />
    );

    let splashPageComponent = (
      <SplashPage
        displayAllSearchResults={this.displayAllSearchResults}
        updateSearchResults={this.updateSearchResults}
        selectSearchResult={this.selectSearchResult}
        searchResults={this.state.searchResults}
        displaySearchSuggestions={this.state.displaySearchSuggestions}
      />
    );

    if (this.state.showSplashPage) {
      card = splashPageComponent;
    } else if (this.state.showAllResultsPage) {
      card = searchResultsComponent;
    } else {
      card = cardComponent;
    }

    return (
      <div>
        <header className="navBar">
          <NavBar
            displayAllOfType={this.displayAllOfType}
            showSplashPage={this.state.showSplashPage}
            displayAllSearchResults={this.displayAllSearchResults}
            searchBarDisplay={this.state.showCardPage}
            updateSearchResults={this.updateSearchResults}
            selectSearchResult={this.selectSearchResult}
            searchResults={this.state.searchResults}
            displaySearchSuggestions={this.state.displaySearchSuggestions}
          />
        </header>
        <section className="App">
          <article className="mainContent">{card}</article>
        </section>
        <div className="appBackground" />
      </div>
    );
  }
}

export default App;
