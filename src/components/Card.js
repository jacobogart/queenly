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
      cardType: ["Bar", "Show", "Queen"],
      icons: {
        webIcon: <i className="fas fa-globe" />,
        phoneIcon: <i className="fas fa-phone-square" />,
        instaIcon: <i className="fab fa-instagram" />,
        facebookIcon: <i className="fab fa-facebook-square" />,
        twitterIcon: <i className="fab fa-twitter-square" />,
        close: <i className="fas fa-times-circle" />
      }
    };
  }

  render() {
    const cardData = this.props.cardData;
    const { id } = cardData;
    let mainInfo, cardType; 

    if (id < 1000) {
      mainInfo = 
        <Queen_Main cardData={cardData}
        icons={this.state.icons} />;
      cardType = "Queen"
      console.log("MainInf", mainInfo)
      console.log("props", this.props)
      console.log("cardData", cardData)
    } else if (id.toString().slice(2) > 0) {
      mainInfo = 
        <Show_Main cardData={cardData} 
        icons={this.state.icons} />;
      cardType = "Show"
      console.log("MainInf", mainInfo);
      console.log("props", this.props);
      console.log("cardData", cardData);
    } else {
      mainInfo = 
        <Bar_Main cardData={cardData}
        icons={this.state.icons} />;
      cardType = "Bar"
      console.log("MainInf", mainInfo);
      console.log("props", this.props);
      console.log("cardData", cardData);
    }

    return (
      <section className="Card">
          <button className="toggle-close" 
            onClick={this.props.toggleSplash}>{this.state.icons.close}</button>
          {mainInfo}
          <Sub_Info 
            cardData={cardData}
            cardType={cardType}
          />
          <Gallery cardData={cardData} />
      </section>
    );
  }
}
