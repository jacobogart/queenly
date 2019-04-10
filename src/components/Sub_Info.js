import React, { Component } from 'react';
// * CSS imports
import '../css/Sub_Info.css';

export default class Sub_Info extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let asset;

    if (this.props.cardType === "Bar") {
      asset = this.props.cardData.map;
    } else if (this.props.cardType === "Queen") {
      asset = `<img className="queen-img" 
        src=${this.props.cardData.imageURL} 
        alt=${this.props.cardData.name}/>`;
    } else {
      asset = `<img 
        src=${this.props.cardData.imageURL} 
        alt=${this.props.cardData.name}/>`;
    }

    function createMarkup() {
      return { __html: asset};
    }

    return (
      <article className="Sub-Info">
        <div 
          className="img-holder"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </article>
    );
  }
}