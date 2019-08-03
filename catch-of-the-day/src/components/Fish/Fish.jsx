import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../helpers";

export default class Fish extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      desc: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string
    }),
    addToOrder: PropTypes.func,
    fishKey: PropTypes.string
  };
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
