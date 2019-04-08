import React from "react";
import Hamburger from "./Hamburger";
import Favorites from "./Favorites";
import "../css/NavBar.css";
import SearchBar from "./SearchBar";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.showSplash) {
      return (
        <nav className="NavBar">
          <Hamburger />
          <SearchBar {...this.props} />
          <Favorites />
        </nav>
      );
    } else {
      return (
        <nav className="NavBar">
          <Hamburger />
          <Favorites />
        </nav>
      );
    }
  }
}

export default NavBar;
