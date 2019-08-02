import React, { Component } from "react";
import { AddFishForm } from "../";
export default class Inventory extends Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}
