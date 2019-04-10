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
      return (
        <nav className="NavBar">
          <Hamburger {...this.props} />
          <SearchBar {...this.props} />
          <Favorites
            displayAllSearchResults={this.props.displayAllSearchResults}
            displayAllOfType={this.props.displayAllOfType}
          />        
        </nav>
      );
    } else {
      return (
        <nav className="NavBar">
          <Hamburger {...this.props} />
          <Favorites
            displayAllSearchResults={this.props.displayAllSearchResults}
            displayAllOfType={this.props.displayAllOfType}
          />
        </nav>
      );
    }
  }
}

export default NavBar;
