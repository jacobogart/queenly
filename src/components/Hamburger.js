import React from "react";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  toggleBurger = () => {
    this.state.showMenu
      ? this.setState({ showMenu: false })
      : this.setState({ showMenu: true });
  };

  handleMouseOut = () => {
    this.setState({ showMenu: false });
  };

  clickHamburger = event => {
    let type = event.target.value.split(" ")[2];
    this.props.displayAllOfType(type);
    this.props.displayAllSearchResults();
  };

  render() {
    if (this.state.showMenu) {
      return (
        <div className="hamburgerMenu">
          <i className="fas fa-bars fa-2x" onClick={this.toggleBurger} />
          <div className="burger-container" onMouseLeave={this.handleMouseOut}>
            <ul className="showMenu" onClick={this.clickHamburger}>
              <li>
                <input type="button" className="menu" value="Show All Venues" />
              </li>
              <li>
                <input type="button" className="menu" value="Show All Shows" />
              </li>
              <li>
                <input type="button" className="menu" value="Show All Queens" />
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
