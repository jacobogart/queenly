import React from 'react';
import Queen_Main from '../components/Queen_Main.js';
import { shallow } from 'enzyme';

let iconsMock = {
    webIcon: <i className="fas fa-globe" />,
    phoneIcon: <i className="fas fa-phone-square" />,
    instaIcon: <i className="fab fa-instagram" />,
    facebookIcon: <i className="fab fa-facebook-square" />,
    twitterIcon: <i className="fab fa-twitter-square" />,
    close: <i className="fas fa-times-circle" />
};

let cardDataMock = {
  "bio":
    "❤️🧡💛💚💙💜💙💚💛🧡❤️ Double-D list Celebrity📍Chicago Drag Queen and Opinionated Scum ❤️🧡💛💚💙💜💙💚💛🧡❤️ IMHO EP. 4 💋⬇️",
  "facebook": 
    "https://www.facebook.com/auntycherrychan",
  "id": 
    121,
  "imageURL":
    "https://scontent-ort2-1.cdninstagram.com/vp/f0b2195af69b918c1baa1ed18c56d446/5D4AF54C/t51.2885-19/s320x320/51218190_377069173112153_1261515169956102144_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com",
  "instagram": 
    "https://www.instagram.com/aunty_chan/?hl=en",
  "name": 
    "Aunty Chan",
  "shows": 
    ["Drag Matinee"],
  "twitter": 
    "https://twitter.com/aunty_chan?lang=en"
};

describe('Queen_Main', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Queen_Main
        cardData={cardDataMock}
        icons={iconsMock} />
    );
  });

  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
})