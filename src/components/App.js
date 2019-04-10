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
      searchSuggestions: false,
      searchResults: [],
      currentResult: null,
      bars: [{ shows: [] }],
      queens: [],
      favoritesList: null,
      searchQuery: ''
    };
  }

  componentDidMount() {
    let newFavoritesList = JSON.parse(localStorage.getItem("favoritesList"));
    this.setState({
      favoritesList: newFavoritesList
    });
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

  updateFavorites = (faveList) => {
    this.setState({
      favoritesList: faveList
    });
  }

  updateSearchResults = query => {
    query
      ? this.setState({
          displaySearchSuggestions: true,
          searchResults: search(query, this.state.bars, this.state.queens)
        })
      : this.setState({
        displaySearchSuggestions: false
      })
  }

  updateQuery = (query) => {
    this.setState({
      searchQuery: query
    })
  }

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
  }

  displayCard = () => {
    this.setState({
      showCardPage: true,
      showAllResultsPage: false,
      showSplashPage: false
    });
  }

  displayAllSearchResults = () => {
    this.setState({
      showCardPage: false,
      showAllResultsPage: true,
      showSplashPage: false,
      displaySearchSuggestions: false
    });
  }

  displayAllOfType = type => {
    let searches = {
      Venues: searchBars("", this.state.bars),
      Shows: searchShows("", this.state.bars),
      Queens: searchQueens("", this.state.queens),
      Favorites: this.state.favoritesList || []
    };
    this.setState({
      searchResults: searches[type]
    }, this.displayAllSearchResults());
  }

  displaySplashPage = () => {
    this.setState({
      showCardPage: false,
      showAllResultsPage: true,
      showSplashPage: true
    });
  }

  hideSearchSuggestions = () => {
      this.setState({
        displaySearchSuggestions: false,
      });
  }

  render() {
    let card;

    let cardComponent = (
      <Card
        cardData={this.state.cardData}
        displaySplashPage={this.displaySplashPage}
        bars={this.state.bars}
        queens={this.state.queens}
        selectSearchResult={this.selectSearchResult}
        favoritesList={this.state.favoritesList}
        updateFavorites={this.updateFavorites}
      />
    );
    let searchResultsComponent = (
      <SearchResults
        displaySplashPage={this.displaySplashPage}
        searchResults={this.state.searchResults}
        selectSearchResult={this.selectSearchResult}
        searchQuery={this.state.searchQuery}
      />
    );

    let splashPageComponent = (
      <SplashPage
        displayAllSearchResults={this.displayAllSearchResults}
        updateSearchResults={this.updateSearchResults}
        selectSearchResult={this.selectSearchResult}
        searchResults={this.state.searchResults}
        displaySearchSuggestions={this.state.displaySearchSuggestions}
        hideSearchSuggestions={this.hideSearchSuggestions}
        updateQuery={this.updateQuery}
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
            hideSearchSuggestions={this.hideSearchSuggestions}
            updateQuery={this.updateQuery}
          />
        </header>
        <section className="App">{card}</section>
        <div className="backgroundImage" />
      </div>
    );
  }
}

export default App;
