import React, { Component } from "react";
import { formatPrice } from "../../helpers";

export default class Fish extends Component {
  render() {
    const { fish, addToOrder, fishKey } = this.props;
    const isAvailable = fish.status === "available" ? true : false;

    return (
      <li className="menu-fish">
        <img src={fish.image} alt={fish.name} />
        <h3 className="fish-name">
          {fish.name}
          <span className="price">{formatPrice(fish.price)}</span>
        </h3>
        <p>{fish.desc}</p>
        <button onClick={() => addToOrder(fishKey)} disabled={!isAvailable}>
          {isAvailable ? "Add To Cart" : "SOLD OUT!"}
        </button>
      </li>
    );
  }
}
