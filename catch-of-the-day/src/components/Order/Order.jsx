import React, { Component } from "react";
import { formatPrice } from "../../helpers";

export default class Order extends Component {
  orderList = x => {
    const { order, fishes } = this.props;
    const fish = fishes[x];
    const isAvailable = fish && fish.status === "available";

    if (!isAvailable) {
      return (
        <li>{`Sorry ${fish ? fish.name : "fish"} is no longer available`}</li>
      );
    } else {
      return (
        <li key={x}>
          {order[x]}lbs {fishes[x].name}
          {formatPrice(fishes[x].price * order[x])}
        </li>
      );
    }
  };
  render() {
    const { order, fishes } = this.props;

    const orderKeys = Object.keys(order);
    const total = orderKeys.reduce((acc, curr) => {
      const fish = fishes[curr];
      const count = order[curr];
      console.log(order[curr]);
      console.log(curr);
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return acc + fish.price * count;
      } else {
        return acc;
      }
    }, 0);

    return (
      <div className="order-wrapper">
        <h2>Your Order</h2>
        <ul className="order">{orderKeys.map(this.orderList)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}
