import React, { Component } from 'react';
// * CSS imports
import '../css/Main_Info.css';

export default class Queen_Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { name, bio } = this.props.cardData;

    return (
      <main className="Queen-Main Main_Info">
        <h2>{name}</h2>
        
      </main>
    );
  }
}