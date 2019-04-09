import React, { Component } from "react";

// * Component imports
import Show_Main from "./Show_Main.js";
import Queen_Main from "./Queen_Main.js";
import Bar_Main from "./Bar_Main.js";
import Sub_Info from "./Sub_Info.js";
import Gallery from "./Gallery.js";

// * CSS imports
import "../css/Card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icons: {
        webIcon: <i className="fas fa-globe" />,
        phoneIcon: <i className="fas fa-phone-square" />,
        instaIcon: <i className="fab fa-instagram" />,
        facebookIcon: <i className="fab fa-facebook-square" />,
        twitterIcon: <i className="fab fa-twitter-square" />,
        close: <i className="fas fa-times-circle" /> 
      },
      favorite: false
    };
  }

  handleFavorites = () => {
    if (this.state.favorite) {
      this.removeFromFavorites();
    } else {
      this.addToFavorites();
    }
    this.setState({
      favorite: !this.state.favorite
    });
  }

  removeFromFavorites = () => {
    console.log('REMOVED')
  }

  addToFavorites = () => {
    console.log('ADDED')
  }

  
  render() {
    const cardData = this.props.cardData;
    const { id } = cardData;
    let mainInfo, cardType;

    if (id < 1000) {
      mainInfo = 
        <Queen_Main 
        cardData={cardData}
        icons={this.state.icons}
        />;
      cardType="Queen";
    } else if (id.toString().slice(2) > 0) {
      mainInfo = 
        <Show_Main 
        cardData={cardData} 
        icons={this.state.icons}
        />;
      cardType = "Show";
    } else {
      mainInfo = 
        <Bar_Main 
        cardData={cardData}
        icons={this.state.icons}
        />;
      cardType = "Bar";
    }

    return (
      <section className="Card">
        <button 
          className={`favoriteBtn fave-${this.state.favorite}`}
          onClick={this.handleFavorites}
        >
          <i className="fas fa-heart fa-2x" />
        </button>
        <button
          className="toggle-close"
          onClick={this.props.displaySplashPage}
        >
          {this.state.icons.close}
        </button>
        {mainInfo}
        <Sub_Info cardData={cardData} cardType={cardType} />
        <Gallery
          cardData={cardData}
          cardType={cardType}
          selectSearchResult={this.props.selectSearchResult}
          bars={this.props.bars}
          queens={this.props.queens}
        />
      </section>
    );
  }
}
