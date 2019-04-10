import React from "react";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  showFavorites = () => {
    this.props.displayAllOfType('Favorites');
    this.props.displayAllSearchResults();
  }

  render() {
    return (
      <div onClick={this.showFavorites} >
        <i className="fas fa-heart fa-2x" />
      </div>
    );
  }
}

export default Favorites;
