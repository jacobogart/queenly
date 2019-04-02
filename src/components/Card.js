import React, { Component } from 'react';
// * Component imports
import Card from './Card.js';
import Show_Main from './Show_Main.js';
import Queen_Main from './Queen_Main.js';
import Bar_Main from './Bar_Main.js';
import Sub_Info from './Sub_Info.js';
import Gallery from './Gallery.js';
// * CSS imports
import '../css/Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: false,
      cardType: ['Bar', 'Show', 'Queen']
    };
  }

  render() {
    return (
      <section className="Card">

      </section>
    )
  }
}