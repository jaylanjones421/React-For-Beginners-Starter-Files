import React, { Component } from "react";
import PropTypes from "prop-types";

export default class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      desc: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string
    }),
    updateFish: PropTypes.func
  };

  handleChange = e => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateFish(this.props.fishKey, updatedFish);
  };

  handleRemove = () => {
    const key = this.props.fishKey;
    this.props.removeFish(key);
  };

  render() {
    const { fish } = this.props;
    return (
      <div className="fish-edit">
        <input
          type="text"
          onChange={this.handleChange}
          value={fish.name}
          name="name"
        />
        <input
          type="text"
          onChange={this.handleChange}
          value={fish.price}
          name="price"
        />
        <select
          required
          name="status"
          type="text"
          placeholder="Status"
          onChange={this.handleChange}
          value={fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>{" "}
        <textarea
          type="text"
          onChange={this.handleChange}
          value={fish.desc}
          name="desc"
        />
        <input
          type="text"
          onChange={this.handleChange}
          value={fish.image}
          name="image"
        />
        <button onClick={this.handleRemove}>Remove Fish</button>
      </div>
    );
  }
}
