import React, { Component } from 'react';

export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
  }

  setResult = () => {
    this.props.selectSearchResult(this.props.name);
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

   