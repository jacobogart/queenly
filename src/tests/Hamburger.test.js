import React from "react";
import Hamburger from "../components/Hamburger";
import { shallow } from "enzyme";

const mockDisplayAllOfType = jest.fn();
const mockDisplayAllSearchResults = jest.fn();

describe("Hamburger", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Hamburger
        displayAllOfType={mockDisplayAllOfType}
        displayAllSearchResults={mockDisplayAllSearchResults}
      />
    );
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have default state", () => {
    expect(wrapper.state()).toEqual({ showMenu: false });
  });

  it("should toggle showMenu when toggleBurger is invoked", () => {
    expect(wrapper.state()).toEqual({ showMenu: false });
    wrapper.instance().toggleBurger();
    expect(wrapper.state()).toEqual({ showMenu: true });
    wrapper.instance().toggleBurger();
    expect(wrapper.state()).toEqual({ showMenu: false });
  });

  it("should set showMenu to false when handleMouseOut is invoked", () => {
    expect(wrapper.state()).toEqual({ showMenu: false });
    wrapper.instance().toggleBurger();
    expect(wrapper.state()).toEqual({ showMenu: true });
    wrapper.instance().handleMouseOut();
    expect(wrapper.state()).toEqual({ showMenu: false });
  });

  it("should invoke displayAllOfType and displayAllSearchResults when clickHamburger is invoked", () => {
    const mockEvent = {target: {value: "Show All Queens"}};
    wrapper.instance().clickHamburger(mockEvent);
    expect(mockDisplayAllOfType).toHaveBeenCalledWith("Queens");
    expect(mockDisplayAllSearchResults).toHaveBeenCalled();
  });
});