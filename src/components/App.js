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
      searchResults: [],
      currentResult: null,
      showCard: false,
      showResults: false,
      showSplash: true,
      cardComponent: null,
      showSuggestions: false,
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
      showSuggestions: true,
      //we have a component called SearchResults and a property on Apps state
      //with the same name.
      searchResults: search(query, this.state.bars, this.state.queens)
    });
  };

  selectResult = resultName => {
    if (this.state.showSplash || this.state.showResults) {
      this.toggleCard();
    }

    this.setState({
      currentResult: resultName,
      showSplash: false,
      cardData: search(resultName, this.state.bars, this.state.queens)[0],
      showSuggestions: false
    });
  };

  toggleCard = () => {
    this.setState({
      showCard: true,
      showResults: false,
      showSplash: false
    });
  };

  // -> SplashPage || SearchResults =X
  // -> SplashPage || NavBar -> SearchBar -> form onSubmit{this.findResults} -> findResults
  // formally toggleResults()
  displayAllSearchResults = () => {
    this.setState({
      showCard: false,
      showResults: true,
      showSplash: false,
      showSuggestions: false
    });
  };

  // toggleSplash = () => {
  //   this.setState({
  //     showCard: false,
  //     showResults: false,
  //     showSplash: true
  //   });
  // };

  //formally toggleSplash()
  displaySplashPage = () => {
    this.setState({
      showCard: false,
      showResults: false,
      showSplash: true
    });
  };

  render() {
    let card;

    let cardComponent = (
      <Card
        cardData={this.state.cardData}
        toggleCard={this.toggleCard}
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
        showSuggestions={this.state.showSuggestions}
      />
    );

    //this conditional is displaying what displays in the main content area of the
    if (this.state.showSplash) {
      card = splashPageComponent;
    } else if (this.state.showResults) {
      card = searchResultsComponent;
    } else {
      card = cardComponent;
    }

    return (
      <div>
        <header className="navBar">
          <NavBar
            //this can be passed down
            showSplash={this.state.showSplash}
            displayAllSearchResults={this.displayAllSearchResults}
            searchBarDisplay={this.state.showCard}
            updateResults={this.updateResults}
            selectResult={this.selectResult}
            searchResults={this.state.searchResults}
            showSuggestions={this.state.showSuggestions}
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
