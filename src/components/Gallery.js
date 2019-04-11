import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';
import { search, searchBars, searchShows, searchQueens } from "../helpers.js";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shows = this.props.cardData.shows || [];
  }

  render() {
    let galleryData

    if (this.props.cardType === "Bar") {
      galleryData = this.props.cardData.shows;
    } else if (this.props.cardType === "Show") {
      galleryData = this.props.queens.filter(queen => queen.shows.includes(this.props.cardData.name));
    } else if (this.props.cardType === "Queen") {
      galleryData = [];
      this.props.cardData.shows.forEach(show => {
        galleryData.push(searchShows(show, this.props.bars)[0])
      })
      console.log(galleryData);
    }
    return (
      <section className="Gallery">
      <div className="Gallery-border"></div>
        {galleryData.map(result =>
        <Thumbnail
            imgURL={result.imageURL}
            selectSearchResult={this.props.selectSearchResult}
            name={result.name}
            key={result.id} 
          />
        )}
      </section>
    );
  }
}
