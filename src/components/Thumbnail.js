import React, { Component } from 'react';

// * CSS imports
import '../css/Thumbnail.css';

export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  setResult = () => {
    this.props.selectResult(this.props.name);
  };

  render() {
    return (
      <figure 
        className="Thumbnail"
        onClick={this.setResult}
      >
        <img 
          className="ThumbnailImg"
          src={this.props.imgURL}/>
        <figcaption>{this.props.name}</figcaption> 
      </figure>
    )
  }
}

   