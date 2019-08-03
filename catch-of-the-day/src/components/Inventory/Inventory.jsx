import React, { Component } from "react";
import PropTypes from "prop-types";
import { AddFishForm, EditFishForm } from "../";

export default class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.shape({
      image: PropTypes.string,
      desc: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string
    }),
    updateFish: PropTypes.func,
    removeFish: PropTypes.func,
    addFish: PropTypes.func,
    loadFishes: PropTypes.func
  };

  renderEditForms = () =>
    Object.keys(this.props.fishes).map(fish => (
      <EditFishForm
        key={fish}
        fishKey={fish}
        fish={this.props.fishes[fish]}
        updateFish={this.props.updateFish}
        removeFish={this.props.removeFish}
      />
    ));
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {this.renderEditForms()}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}
