import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';
import { shallow } from 'enzyme';

const mockBars = [{
  "address": "5025 N Clark St, Chicago, IL 60640",
  "facebook": "https://www.facebook.com/MeetingHouseChi",
  "id": 2100,
  "imageURL": "https://scontent-dfw5-1.cdninstagram.com/vp/dc393598c8355083e81b210447749477/5D30B2CA/t51.2885-19/s320x320/30920559_218883882204264_3986740088989024256_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com",
  "instagram": "https://www.instagram.com/meetinghousetavernchi/",
  "map": "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.259884708719!2d-87.67001098514663!3d41.97322967921473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd35871b3d69d%3A0x5fc40651905618a!2sMeeting+House+Tavern!5e0!3m2!1sen!2sus!4v1554176037774!5m2!1sen!2sus\" width=\"400\" height=\"300\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>",
  "name": "Meeting House Tavern",
  "phone": "(773) 696-4211",
  "shows": [{
    "category": "drag show",
    "dayOfWeek": "Sudnay",
    "frequency": "weekly",
    "host": ["Chamilla Foxx"],
    "id": 2101,
    "imageURL": "https://pbs.twimg.com/media/D1Any4VWkAA86HL.jpg",
    "reoccuring": true,
    "startTime": [1400],
    "name": "Sunday Social"
  }],
  "twitter": "https://twitter.com/meetinghousechi",
  "website": "http://www.meetinghousetavern.com/"
}];
const mockQueens = [{
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
}];

const defaultState = {
  showCardPage: false,
  showAllResultsPage: false,
  showSplashPage: true,
  searchSuggestions: false,
  searchResults: [],
  currentResult: null,
  bars: [{ shows: [] }],
  queens: [],
  favoritesList: null,
  searchQuery: ''
}

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it("should update favoritesList when updateFavorites is invoked", () => {
    expect(wrapper.state("favoritesList")).toEqual(null);
    const mockFaveList = [{mock: "faveList"}]

    wrapper.instance().updateFavorites(mockFaveList);
    expect(wrapper.state("favoritesList")).toEqual(mockFaveList);
  });

  it("should update searchResults when updateSearchResults is invoked", () => {
    expect(wrapper.state("searchResults")).toEqual([]);
    const mockQuery = "Meeting House";
    wrapper.instance().setState({
      bars: mockBars,
      queens: mockQueens
    });
    wrapper.instance().updateSearchResults(mockQuery);
    expect(wrapper.state('searchResults')).toEqual(mockBars);
  });

  it("should update searchQuery when updateQuery is invoked", () => {
    expect(wrapper.state("searchQuery")).toEqual('');
    wrapper.instance().updateQuery("Aunt");
    expect(wrapper.state("searchQuery")).toEqual("Aunt");
  });

  it("should invoke displayCard when selectSearchResult is invoked from default", () => {
    expect(wrapper.state()).toEqual(defaultState);
    jest.spyOn(wrapper.instance(), "displayCard");
    const mockResultName = "Meeting House Tavern";
    wrapper.instance().setState({
      bars: mockBars,
      queens: mockQueens
    });
    wrapper.instance().selectSearchResult(mockResultName);
    expect(wrapper.instance().displayCard).toHaveBeenCalled();
  });
  it("should not invoke displayCard when selectSearchResult is invoked from a card", () => {
    expect(wrapper.state()).toEqual(defaultState);
    jest.spyOn(wrapper.instance(), "displayCard");
    const mockResultName = "Meeting House Tavern";
    wrapper.instance().setState({
      bars: mockBars,
      queens: mockQueens,
      showSplashPage: false,
      showAllResultsPage: false
    });
    wrapper.instance().selectSearchResult(mockResultName);
    expect(wrapper.instance().displayCard).not.toHaveBeenCalled();
  });
  it("should update state when selectSearchResult is invoked", () => {
    expect(wrapper.state()).toEqual(defaultState);
    const mockResultName = "Meeting House Tavern";
    wrapper.instance().setState({
      bars: mockBars,
      queens: mockQueens
    });
    wrapper.instance().selectSearchResult(mockResultName);
    expect(wrapper.state("currentResult")).toEqual(mockResultName);
    expect(wrapper.state("showSplashPage")).toEqual(false);
    expect(wrapper.state("cardData")).toEqual(mockBars[0]);
    expect(wrapper.state("displaySearchSuggestions")).toEqual(false);
  });
  it("should update state when displayCard is invoked", () => {
    expect(wrapper.state()).toEqual(defaultState);
    wrapper.instance().displayCard();
    expect(wrapper.state("showCardPage")).toEqual(true);
    expect(wrapper.state("showAllResultsPage")).toEqual(false);
    expect(wrapper.state("showSplashPage")).toEqual(false);
  });
  it("should update state when displayAllSearchResults is invoked", () => {
    expect(wrapper.state()).toEqual(defaultState);
    wrapper.instance().displayAllSearchResults();
    expect(wrapper.state("showCardPage")).toEqual(false);
    expect(wrapper.state("showAllResultsPage")).toEqual(true);
    expect(wrapper.state("showSplashPage")).toEqual(false);
    expect(wrapper.state("displaySearchSuggestions")).toEqual(false);
  });
  it("should update state and invoke displayAllSearchResults when displayAllOfType is invoked", () => {
    expect(wrapper.state()).toEqual(defaultState);
    jest.spyOn(wrapper.instance(), "displayAllSearchResults");
    wrapper.instance().setState({ bars: mockBars });
    wrapper.instance().displayAllOfType("Venues");
    expect(wrapper.state("searchResults")).toEqual(mockBars);
    expect(wrapper.state("searchQuery")).toEqual("");
    expect(wrapper.instance().displayAllSearchResults).toHaveBeenCalled();
  });
  it("should update state when displaySplashPage is invoked", () => {
    expect(wrapper.state()).toEqual(defaultState);
    wrapper.instance().displaySplashPage();
    expect(wrapper.state("showCardPage")).toEqual(false);
    expect(wrapper.state("showAllResultsPage")).toEqual(true);
    expect(wrapper.state("showSplashPage")).toEqual(true);
  });
  it("should update state when displaySplashPage is invoked", () => {
    expect(wrapper.state()).toEqual(defaultState);
    wrapper.instance().hideSearchSuggestions();
    expect(wrapper.state("displaySearchSuggestions")).toEqual(false);
  });
});