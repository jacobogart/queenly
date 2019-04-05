import React, { Component } from 'react';
// * CSS imports
import '../css/Main_Info.css';

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
        <article className="Content">
          <h2>{ name }</h2>
          <img className="bar-img" src={ imageURL } alt="image of bar" />
          <p>
            <img className="social-icon phone-icon" src={phoneIcon} />
            {phone}
          </p>
          <h4>Notes:</h4>
          <p className="notes">{ notes }</p>
        </article>
        <aside className="social-links">
          <a href={ website }>
            <img className="social-icon web-icon" src={ webIcon } />
          </a>
          <a href={ instagram }>
            <img className="social-icon insta-icon" src={ instaIcon } />
          </a>
          <a href={ facebook }>
            <img className="social-icon fb-icon" src={ facebookIcon } />
          </a>
          <a href={ twitter }>
            <img className="social-icon twitter-icon" src={ twitterIcon } />
          </a>
        </aside>
      </main>
    );
  }
}