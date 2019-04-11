import React from 'react';
import Show_Main from '../components/Show_Main.js';
import { shallow } from 'enzyme';

const mockSelectSearchResult = jest.fn();

let cardDataMock = {
  "category": "drag show",
  "dayOfWeek": "Sunday",
  "frequency": "weekly",
  "host": ["Chamilla Foxx"],
  "id": 2101,
  "imageURL": "https://pbs.twimg.com/media/D1Any4VWkAA86HL.jpg",
  "reoccuring": true,
  "startTime": [1400],
  "name": "Sunday Social"
}

let mockBars = [{
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
    "dayOfWeek": "Sunday",
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
}]

let icons = {
  webIcon: <i className="fas fa-globe" /> ,
  phoneIcon: <i className="fas fa-phone-square" /> ,
  instaIcon: <i className="fab fa-instagram" /> ,
  facebookIcon: <i className="fab fa-facebook-square" /> ,
  twitterIcon: <i className="fab fa-twitter-square" /> ,
  close: <i className="fas fa-times-circle" /> 
}

describe('Show_Main', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Show_Main
        cardData={cardDataMock}
        bars={mockBars}
        icons={icons}
        selectSearchResult={mockSelectSearchResult}
      />
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      location: "Meeting House Tavern"
    });
  });
  it("should stringify the hosts name", () => {
    expect(wrapper.instance().stringifyHosts(["T Rex", "Nico"])).toEqual(
      "Hosts: T Rex & Nico"
    );
  });
  it("should stringify the reoccuring property", () => {
    expect(wrapper.instance().stringifyReoccuring(true)).toEqual("Every");
    expect(wrapper.instance().stringifyReoccuring(false)).toEqual("Only this");
  });
  it("should return a stringified date when convertWhen is called (weekly)", () => {
    let { dayOfWeek, frequency, reoccuring } = mockBars[0].shows[0];
    expect(
      wrapper.instance().convertWhen(dayOfWeek, frequency, reoccuring)
    ).toEqual("Every Sunday of the month.");
  });
  it("should return a stringified date when convertWhen is called (monthly)", () => {
    let { dayOfWeek, frequency, reoccuring } = {
      dayOfWeek: "Sunday",
      frequency: "first",
      reoccuring: true,
    };
    expect(
      wrapper.instance().convertWhen(dayOfWeek, frequency, reoccuring)
    ).toEqual("Every Sunday on the first of the month.");
  });
  it("should return a stringified time when convertTime", () => {
    expect(wrapper.instance().convertTime(1400)).toEqual("2:00PM");
  });
  it("should return the show's location when getLocation is called", () => {
    expect(wrapper.instance().getLocation()).toEqual("Meeting House Tavern");
  });
  it("should invoke selectSearchResults when goToBar is called", () => {
    wrapper.instance().goToBar()
    expect(mockSelectSearchResult).toHaveBeenCalledWith("Meeting House Tavern");
  });

})