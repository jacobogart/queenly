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
    const navBarWithSearch = this.props.searchBarDisplay;
    if (navBarWithSearch) {
      return (
        <nav className="NavBar">
          <Hamburger />
          <SearchBar
            updateResults={this.props.updateResults}
            selectResult={this.props.selectResult}
            searchResults={this.props.searchResults}
          />
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
