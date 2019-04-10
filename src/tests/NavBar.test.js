import React from "react";
import NavBar from "../components/NavBar";
import { shallow } from "enzyme";

let wrapper;
//navbar should exist

describe("<NavBar />"),
  () => {
    it("should exist", () => {
      const wrapper = shallow(<NavBar />);
      expect(wrapper.exists()).toBe(true);
    });
  };

//navbar should have hamburger and favorites contained
//if not on splashPage, navbar should also have searchBar component
describe("NavBar", () => {});
