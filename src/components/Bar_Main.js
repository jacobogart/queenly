import React, { Component } from 'react';

export default class Bar_Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { name, imageURL, phone, notes, website, facebook, instagram, twitter } 
      = this.props.cardData;
    let { webIcon, phoneIcon, instaIcon, facebookIcon, twitterIcon}
      = this.props.icons;

    return (
      <main className="Bar-Main Main_Info">
        <article className="title">
          <h2>{name}</h2>
        </article>
        <div className="bar-img--container">
          <img
            className="bar-img"
            src={imageURL}
            alt={"Image of " + { name }}
          />
        </div>
        <p className="phone">
          {phoneIcon}
          {phone}
        </p>
        <article className="notes-container">
          <h4>Notes:</h4>
          <p className="notes">{notes}</p>
        </article>
        <aside className="social-links">
          <a href={website}>{webIcon}</a>
          <a href={instagram}>{instaIcon}</a>
          <a href={facebook}>{facebookIcon}</a>
          <a href={twitter}>{twitterIcon}</a>
        </aside>
      </main>
    );
  }
}