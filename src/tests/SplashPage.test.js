import React from "react";
import SplashPage from "../components/SplashPage";
import { shallow } from "enzyme";

describe("<SplashPage />", () => {
  it("should render correctly.", () => {
    const wrapper = shallow(<SplashPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
