import React from "react";
import Favorites from "../components/Favorites";
import { shallow } from "enzyme";

describe('<Favorites />', () => {
  const wrapper;
  beforeEach(() => {
    wrapper = shallow(
    <Favorites />
  );
});