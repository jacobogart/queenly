import React from "react";
import Hamburger from "./Hamburger";
import Favorites from "./Favorites";
import SearchBar from "./SearchBar";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  displaySplashPage = () => {
    this.props.displaySplashPage();
  };

  render() {
    if (!this.props.showSplashPage) {
      var navLogo = (
        <h2 className="navLogo" onClick={this.displaySplashPage}>
          Queenly
        </h2>
      );
      var searchBar = <SearchBar {...this.props} />;
    }

    return (
      <nav className="NavBar">
        <Hamburger {...this.props} />
        {navLogo}
        {searchBar}
        <Favorites 
          displayAllSearchResults={this.props.displayAllSearchResults}
          displayAllOfType={this.props.displayAllOfType} 
        />
      </nav>
    );
  }
}

export default NavBar;
