import React from "react";
import NavBar from "../components/NavBar";
import { shallow } from "enzyme";

describe("wNavBar", () => {
  it("should exist", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.exists()).toBe(true);
  });
  it("should match the snapshot", () => {
    const tree = shallow(<NavBar />);
    expect(tree).toMatchSnapshot();
  });
  it("should render two elements on splash page", () => {
    const wrapper = shallow(<NavBar showSplashPage={true} />);
    expect(wrapper.find("nav").children().length).toBe(2);
  });
  it("should only have hamburger and favorites element while on splash page", () => {
    const wrapper = shallow(<NavBar showSplashPage={true} />);
    expect(wrapper.find("Hamburger").exists()).toBe(true);
    expect(wrapper.find("Favorites").exists()).toBe(true);
    expect(wrapper.find("SearchBar").exists()).toBe(false);
  });
  it("should render three elements while not on splash page", () => {
    const wrapper = shallow(<NavBar showSplashPage={false} />);
    expect(wrapper.find("nav").children().length).toBe(4);
  });
  it("should render three elements: [hamburger, searchbar, favorites] while not on splash page", () => {
    const wrapper = shallow(<NavBar showSplashPage={false} />);
    expect(wrapper.find("Hamburger").exists()).toBe(true);
    expect(wrapper.find("Favorites").exists()).toBe(true);
    expect(wrapper.find("SearchBar").exists()).toBe(true);
  });
  it("should invoke App's displaySplash page when local displaySplashPage is invoked", () => {
    const mockDisplaySplashPage = jest.fn();
    const wrapper = shallow(<NavBar displaySplashPage={mockDisplaySplashPage} />);
    wrapper.instance().displaySplashPage();
    expect(mockDisplaySplashPage).toHaveBeenCalled();
  });
});
