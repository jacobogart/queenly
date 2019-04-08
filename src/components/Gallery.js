import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import GalleryImage from "./GalleryImage";
// * CSS imports
import "../css/Gallery.css";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.shows = this.props.cardData.shows || [];
  }

  render() {
    return (
      <section className="Gallery">
        <p>Gallery</p>
        <ul>
          {this.shows.map(show => {
            return <GalleryImage showCategory={show.category} key={show.id} />;
          })}
        </ul>
      </section>
    );
  }
}
