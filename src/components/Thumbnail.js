import React, { Component } from 'react';

// * CSS imports
import '../css/Thumbnail.css';

export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <figure className="Thumbnail">
        <img src={this.props.imgURL}/>
        <figcaption>{this.props.name}</figcaption> 
      </figure>
    )
  }
}

   