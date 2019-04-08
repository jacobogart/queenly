import React from "react";
import "../css/Hamburger.css";
class Hamburger extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    }
  }
  toggleBurger = () => {
    this.state.showMenu
      ? this.setState( {showMenu: false} )
      : this.setState( {showMenu: true} )
  }

  render() {
    if (this.state.showMenu) {
      return (
        <div className="hamburgerMenu">
          <i className="fas fa-bars fa-2x" onClick={this.toggleBurger} />
          <ul className="showMenu">
            <li>
              <input
                type="button"
                className="menu"
                value="Show All Venues"
              />
            </li>
            <li>
              <input
                type="button"
                className="menu"
                value="Show All Shows"
              />
            </li>
            <li>
              <input
                type="button"
                className="menu"
                value="Show All Queens"
              />
            </li>
            <li>
              <input
                type="button"
                className="menu"
                value="Show All Favorites"
              />
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="hamburgerMenu">
          <i className="fas fa-bars fa-2x" onClick={this.toggleBurger} />
        </div>
      );
    }
  }
}

export default Hamburger;
