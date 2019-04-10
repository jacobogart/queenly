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
    if (!this.props.showSplashPage) {
      var navLogo = <h2 className="navLogo">Queenly</h2> 
      var searchBar = <SearchBar {...this.props} />
    }

    return (
      <nav className="NavBar">
        <Hamburger {...this.props} />
        {navLogo}
        {searchBar}
        <Favorites {...this.props} />
      </nav>
    );
  }
}

export default NavBar;
