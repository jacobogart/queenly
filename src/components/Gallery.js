import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';
import { searchShows } from "../helpers.js";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
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
