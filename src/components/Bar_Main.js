import React, { Component } from 'react';

// * CSS imports
import '../css/Main_Info.css';

export default class Bar_Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { name, imageURL, phone, notes, website, facebook, instagram, twitter } 
      = this.props.cardData;
    let { webIcon, phoneIcon, instaIcon, facebookIcon, twitterIcon}
      = this.props.icons;

    return (
      <main className="Bar-Main Main_Info">
        <article className="Content">
          <h2>{name}</h2>
          <img
            className="bar-img"
            src={imageURL}
            alt={"Image of " + { name }}
          />
          <p className="phone">
            {phoneIcon}
            {phone}
          </p>
          {!notes ? null : (
            <div>
              <h4>Notes:</h4>
              <p className="notes">{notes}</p>
            </div>
          )}
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