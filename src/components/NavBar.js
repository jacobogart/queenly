import React from "react";
import Hamburger from "./Hamburger";
import Favorites from "./Favorites";
import "../css/NavBar.css";
class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="NavBar">
        <Hamburger />
        <Favorites />
      </nav>
    );
  }
}

export default NavBar;
