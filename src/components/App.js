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

  componentDidMount() {
    fetch("https://fe-apps.herokuapp.com/api/v1/whateverly/1901/jacobogart/bars")
      .then(response => response.json())
      .then(data => this.setState({ bars: data.bars }))
      .catch(err => console.log(err));
    fetch("https://fe-apps.herokuapp.com/api/v1/whateverly/1901/jacobogart/queens")
      .then(response => response.json())
      .then(data => this.setState({ queens: data.queens }))
      .catch(err => console.log(err));
  };

  updateResults = query => {
    this.setState(
      {
        searchResults: search(query, this.state.bars, this.state.queens)
      }
    );
  };
  selectResult = resultName => {
    this.toggleCard();
    this.setState({
      currentResult: resultName
    });
  };

  toggleCard = () => {
    let toggleSwitch = this.state.showCard ? false : true;
    console.log("Switch", toggleSwitch);
    this.setState({
      showCard: toggleSwitch
    });
  };

  render() {
    let card = null;
    let cardComponent = (
      <Card
        result={this.state.currentResult}
        toggle={this.toggleCard}
        bars={this.state.bars}
        queens={this.state.queens}
      />
    );
    this.state.showCard ? (card = cardComponent) : (card = null);
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
