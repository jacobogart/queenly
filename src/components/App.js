import React from "react";
import NavBar from "./NavBar";
import search from "../helpers.js";
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
      cardComponent: null,
      bars: [{ shows: [] }],
      queens: []
    };
  }

  //on mount collect data from remote servers
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

  //does App need to know if the suggestions bar is open or closed?
  //can we confine that to the search bar and simply pass the data we need
  //as props into the searchBar component?
  updateResults = query => {
    this.setState({
      displaySearchSuggestions: true,
      //we have a component called SearchResults and a property on Apps state
      //with the same name.
      searchResults: search(query, this.state.bars, this.state.queens)
    });
  };

  selectResult = resultName => {
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

  //formerly toggleCard()
  displayCard = () => {
    this.setState({
      showCardPage: true,
      showAllResultsPage: false,
      showSplashPage: false
    });
  };

  // -> SplashPage || SearchResults =X
  // -> SplashPage || NavBar -> SearchBar -> form onSubmit{this.findResults} -> findResults
  // formerly toggleResults()
  displayAllSearchResults = () => {
    this.setState({
      showCardPage: false,
      showAllResultsPage: true,
      showSplashPage: false,
      displaySearchSuggestions: false
    });
  };

  //formerly toggleSplash()
  displaySplashPage = () => {
    this.setState({
      showCardPage: false,
      //no apparent difference having this true || false
      showAllResultsPage: true,
      showSplashPage: true
    });
  };

  render() {
    let card;

    let cardComponent = (
      <Card
        cardData={this.state.cardData}
        // not used in the component
        // displayCard={this.displayCard}
        displaySplashPage={this.displaySplashPage}
        bars={this.state.bars}
        queens={this.state.queens}
      />
    );

    let searchResultsComponent = (
      <SearchResults
        displaySplashPage={this.displaySplashPage}
        searchResults={this.state.searchResults}
        // there is no displayAllSearchResults || toggleResults used in this component
        // displayAllSearchResults={this.displayAllSearchResults}
        selectResult={this.selectResult}
      />
    );

    let splashPageComponent = (
      <SplashPage
        displayAllSearchResults={this.displayAllSearchResults}
        updateResults={this.updateResults}
        selectResult={this.selectResult}
        searchResults={this.state.searchResults}
        displaySearchSuggestions={this.state.displaySearchSuggestions}
      />
    );

    //this conditional is displaying what displays in the main content area of the
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
            //this can be passed down
            showSplashPage={this.state.showSplashPage}
            displayAllSearchResults={this.displayAllSearchResults}
            searchBarDisplay={this.state.showCardPage}
            updateResults={this.updateResults}
            selectResult={this.selectResult}
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
