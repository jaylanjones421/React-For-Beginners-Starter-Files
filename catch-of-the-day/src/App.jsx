import React, { Component } from "react";
import { Header, Order, Inventory, Fish } from "./components";
import sampleFishes from "./sample-fishes";
import base from "./base";
export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  removeFish = key => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  };

  removeOrderLine = key => {
    const order = { ...this.state.order };
    delete order[key];
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
        <Order
          order={this.state.order}
          fishes={this.state.fishes}
          removeOrderLine={this.removeOrderLine}
        />
        <Inventory
          addFish={this.addFish}
          loadFishes={this.loadFishes}
          addToOrder={this.addToOrder}
          updateFish={this.updateFish}
          removeFish={this.removeFish}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}
