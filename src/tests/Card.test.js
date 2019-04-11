import React from "react";
import ReactDOM from "react-dom";
import Card from "../components/Card.js";
import { shallow } from "enzyme";

const mockSelectSearchResult = jest.fn();
const mockDisplaySplashPage = jest.fn();
const mockUpdateFavorites = jest.fn();

const mockBars = [{ shows: [] }];
const mockQueens = [];
const mockCardData = {
  "bio":
      "❤️🧡💛💚💙💜💙💚💛🧡❤️ Double-D list Celebrity📍Chicago Drag Queen and Opinionated Scum ❤️🧡💛💚💙💜💙💚💛🧡❤️ IMHO EP. 4 💋⬇️",
  "facebook": "https://www.facebook.com/auntycherrychan",
  "id": 121,
  "imageURL":
      "https://scontent-ort2-1.cdninstagram.com/vp/f0b2195af69b918c1baa1ed18c56d446/5D4AF54C/t51.2885-19/s320x320/51218190_377069173112153_1261515169956102144_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com",
  "instagram": "https://www.instagram.com/aunty_chan/?hl=en",
  "name": "Aunty Chan",
  "shows": ["Drag Matinee"],
  "twitter": "https://twitter.com/aunty_chan?lang=en"
  };

describe("Card", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Card
        cardData={mockCardData}
        displaySplashPage={mockDisplaySplashPage}
        bars={mockBars}
        queens={mockQueens}
        selectSearchResult={mockSelectSearchResult}
        updateFavorites={mockUpdateFavorites}
      />
    );
  });
  it("should match snapshop", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have default state", () => {
    expect(wrapper.state()).toEqual({
      icons: {
        webIcon: <i className="fas fa-globe" />,
        phoneIcon: <i className="fas fa-phone-square" />,
        instaIcon: <i className="fab fa-instagram" />,
        facebookIcon: <i className="fab fa-facebook-square" />,
        twitterIcon: <i className="fab fa-twitter-square" />,
        close: <i className="fas fa-times-circle" />
      },
      favorite: false
    });
  });
  it("should invoke displaySplashPage when X button is clicked", () => {
    wrapper.find(".toggle-close").simulate('click');
    expect(mockDisplaySplashPage).toBeCalled();
  });
  it("should toggle favorite state when heart button is clicked", () => {
    expect(wrapper.state("favorite")).toEqual(false);
    wrapper.find(".favoriteBtn").simulate("click");
    expect(wrapper.state("favorite")).toEqual(true);
    wrapper.find(".favoriteBtn").simulate("click");
    expect(wrapper.state("favorite")).toEqual(false);
  });
  it("should invoke addToFavorites when heart button is clicked from default", () => {
    wrapper.instance().addToFavorites = jest.fn();
    expect(wrapper.state("favorite")).toEqual(false);
    wrapper.find(".favoriteBtn").simulate("click");
    expect(wrapper.instance().addToFavorites).toHaveBeenCalled();
  });
  it("should invoke removeFromFavorites when heart button is clicked a second time", () => {
    wrapper.instance().addToFavorites = jest.fn();
    wrapper.instance().removeFromFavorites = jest.fn();
    expect(wrapper.state("favorite")).toEqual(false);
    wrapper.find(".favoriteBtn").simulate("click");
    expect(wrapper.instance().addToFavorites).toHaveBeenCalled();
    wrapper.find(".favoriteBtn").simulate("click");
    expect(wrapper.instance().removeFromFavorites).toHaveBeenCalled();
  });
  it("should invoke updateFavorites anytime the heart button is clicked", () => {
    expect(wrapper.state("favorite")).toEqual(false);
    wrapper.find(".favoriteBtn").simulate("click");
    expect(mockUpdateFavorites).toHaveBeenCalled();
  });
});
