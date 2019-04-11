import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';
import { searchShows } from "../helpers.js";

// * CSS imports
import "../css/Gallery.css";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.galleryData = [];
  }

  generateGalleryData = (type) => {
    switch (type) {
      case "Bar":
        this.galleryData = this.props.cardData.shows;
        break;
      case "Show":
        this.galleryData = this.props.queens.filter(queen =>
          queen.shows.includes(this.props.cardData.name));
        break;
      case "Queen":
        this.galleryData = [];
        this.props.cardData.shows.forEach(show => {
          this.galleryData.push(searchShows(show, this.props.bars)[0]);
        });
        break;
    }
  }

  render() {
    this.generateGalleryData(this.props.cardType);
    return (
      <section className="Gallery">
        {this.galleryData.map(result =>
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
