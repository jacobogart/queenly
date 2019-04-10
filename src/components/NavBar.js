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
    let navLogo = <h2 className="navLogo">Queenly</h2>
    let searchBar = <SearchBar {...this.props} />

    if (!this.props.showSplashPage) {
      return (
        <nav className="NavBar">
          <Hamburger {...this.props} />
          {navLogo}
          {searchBar}
          <Favorites {...this.props} />
        </nav>
      );
    } else {
      return (
        <nav className="NavBar">
          <Hamburger {...this.props} />
          <Favorites {...this.props} />
        </nav>
      );
    }
  }
}

export default NavBar;
