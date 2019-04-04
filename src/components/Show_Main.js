import React, { Component } from 'react';
// * CSS imports
import '../css/Main_Info.css';

export default class Show_Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { name } = this.props.cardData
    return (
      <main className="Show-Main">
        <p>Show {name}</p>
      </main>
    );
  }
}