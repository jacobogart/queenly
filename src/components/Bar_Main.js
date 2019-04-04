import React, { Component } from 'react';
// * CSS imports
import '../css/Main_Info.css';

export default class Bar_Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { name } = this.props.cardData
    return (
      <main className="Bar-Main Main_Info">
        <p>Bar {name}</p>
      </main>
    );
  }
}