import React from "react";
import "../css/Hamburger.css";
class Hamburger extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <i className="fas fa-bars fa-2x" />
        {/* <ul>
          <li>All Venues</li>
          <li>All Shows</li>
          <li>All Queens</li>
        </ul> */}
      </div>
    );
  }
}

export default Hamburger;
