import React, { Component } from "react";
import { Header, Order, Inventory, Fish } from "./components";
import sampleFishes from "./sample-fishes";

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  loadFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = fish => {
    const order = { ...this.state.order };
    order[fish] = order[fish] + 1 || 1;
    this.setState({ order });
  };

  render() {
    const allFishes = () =>
      Object.keys(this.state.fishes).map((fish, i) => (
        <Fish
          addToOrder={this.addToOrder}
          key={fish}
          fishKey={fish}
          fish={this.state.fishes[fish]}
        />
      ));
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul>{allFishes()}</ul>
        </div>
        <Order order={this.state.order} fishes={this.state.fishes} />
        <Inventory
          addFish={this.addFish}
          loadFishes={this.loadFishes}
          addToOrder={this.addToOrder}
        />
      </div>
    );
  }
}
