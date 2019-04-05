import React, { Component } from 'react';
// * CSS imports
import '../css/Main_Info.css';

export default class Queen_Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { name, bio, facebook, instagram, twitter } 
      = this.props.cardData;
    let { instaIcon, facebookIcon, twitterIcon }
      = this.props.icons;

    return (
      <main className="Queen-Main Main_Info">
        <article className="queen-content">
          <h2>{name}</h2>
          <h4>Instagram Bio:</h4>
          <p className="bio">{bio}</p>
        </article>
        <aside className="queen-links social-links">
          <a href={instagram}>
            <img className="social-icon insta-icon" src={instaIcon} />
          </a>
          <a href={facebook}>
            <img className="social-icon fb-icon" src={facebookIcon} />
          </a>
          <a href={twitter}>
            <img className="social-icon twitter-icon" src={twitterIcon} />
          </a>
        </aside>
      </main>
    );
  }
}