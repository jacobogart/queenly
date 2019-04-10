import React from "react";
import Hamburger from "../components/Hamburger";
import { shallow } from "enzyme";

describe("<Hamburger />", () => {
  it("should exist", () => {
    const wrapper = shallow(<Hamburger />);
    expect(wrapper.exists()).toBe(true);
  });
  it("on button click should display menu", () => {
    const wrapper = shallow(<Hamburger />);
    const button = wrapper.find("i");
    expect(wrapper.find(".showMenu").exists()).toBe(false);
    button.simulate("click");
    expect(wrapper.find(".showMenu").exists()).toBe(true);
  });
});
//Hamburger should exist
//showMenu should be true on first click
//showMenu should be false on second click

//input "show all venues" should display all venues on click
//input "show all shows" should display all shows on click
//input "show all queens" should display all queens on click
//input "show all favorites" should display all favorites on click
