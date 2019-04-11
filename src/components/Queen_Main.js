import React, { Component } from 'react';

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
            {instaIcon}
          </a>
          <a href={facebook}>
            {facebookIcon}
          </a>
          <a href={twitter}>
            {twitterIcon}
          </a>
        </aside>
      </main>
    );
  }
}