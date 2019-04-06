import React, { Component } from "react";
import search from "../helpers.js";

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
        webIcon:
          "http://peopleforpeople.org/wp-content/uploads/2018/07/internet-icon-54267.png",
        phoneIcon:
          "https://freeiconshop.com/wp-content/uploads/edd/phone-flat.png",
        instaIcon:
          "https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300",
        facebookIcon:
          "http://www.templetonconstruction.co.nz/wp-content/uploads/2016/03/facebook-icon-preview-1.png",
        twitterIcon:
          "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/social-twitter-icon.png"
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
            onClick={this.props.toggleSplash}>X</button>
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
