import React from "react";

class GalleryImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <li>{this.props.name}</li>
      </div>
    );
  }
}

export default GalleryImage;
