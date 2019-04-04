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
      showCard: false,
      cardType: ["Bar", "Show", "Queen"]
    };
  }

  render() {
    const cardData = this.props.cardData;
    const { id } = cardData;
    let mainInfo, cardType; 

    if (id < 1000) {
      mainInfo = <Queen_Main cardData={cardData} />;
      cardType = "Queen"
    } else if (id.toString().slice(2) > 0) {
      mainInfo = <Show_Main cardData={cardData} />;
      cardType = "Show"
    } else {
      mainInfo = <Bar_Main cardData={cardData} />;
      cardType = "Bar"
    }

    return (
      <section className="Card">
          <button className="toggle-close" 
            onClick={this.props.toggle}>X</button>
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
