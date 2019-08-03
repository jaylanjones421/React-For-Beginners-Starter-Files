import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class Order extends Component {
  static propTypes = {
    order: PropTypes.object,
    fishes: PropTypes.object,
    removeOrderLine: PropTypes.func
  };
  orderList = x => {
    const { order, fishes } = this.props;
    const fish = fishes[x];
    const isAvailable = fish && fish.status === "available";
    const transitionOptions = {
      classNames: "order",
      key: x,
      timeout: { enter: 250, exit: 250 }
    };
    // this makes sure the fish are loaded before rendering
    if (!fish) {
      return null;
    } else if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li>{`Sorry ${fish ? fish.name : "fish"} is no longer available`}</li>
        </CSSTransition>
      );
    } else {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={x}>
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition
                  classNames="count"
                  key={order[x]}
                  timeout={{ enter: 250, exit: 250 }}
                >
                  <span>{order[x]}</span>
                </CSSTransition>
              </TransitionGroup>
              lbs {fishes[x].name + " "}
              {formatPrice(fishes[x].price * order[x])}
              <button onClick={() => this.props.removeOrderLine(x)}>
                &times;
              </button>
            </span>
          </li>
        </CSSTransition>
      );
    }
  };
  render() {
    const { order, fishes } = this.props;
    const orderKeys = Object.keys(order);
    const total = orderKeys.reduce((acc, curr) => {
      const fish = fishes[curr];
      const count = order[curr];
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
        <TransitionGroup component="ul" className="order">
          {orderKeys.map(this.orderList)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}
