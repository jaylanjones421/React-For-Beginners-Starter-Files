import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddFishForm extends Component {
  static propTypes = {
    image: PropTypes.string,
    desc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    status: PropTypes.string,
    addFish: PropTypes.func
  };

  state = {
    name: "",
    price: "",
    status: "",
    desc: "",
    image: ""
  };

  handleChange = (type, e) => {
    this.setState({ [type]: e.target.value });
  };
  createFish = e => {
    e.preventDefault();
    const { name, price, status, desc, image } = this.state;
    const fish = {
      name,
      price: parseFloat(price),
      status: status || "available",
      desc,
      image
    };
    this.props.addFish(fish);
    this.setState({
      name: "",
      price: "",
      status: "",
      desc: "",
      image: ""
    });
  };

  render() {
    const { name, price, status, desc, image } = this.state;

    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          required
          onChange={e => this.handleChange("name", e)}
          name="name"
          type="text"
          placeholder="Name"
          value={name}
        />
        <input
          required
          onChange={e => this.handleChange("price", e)}
          name="price"
          type="text"
          placeholder="Price"
          value={price}
        />
        <select
          required
          onChange={e => this.handleChange("status", e)}
          name="status"
          type="text"
          placeholder="Status"
          value={status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          required
          onChange={e => this.handleChange("desc", e)}
          name="desc"
          type="text"
          placeholder="Desc"
          value={desc}
        />
        <input
          required
          onChange={e => this.handleChange("image", e)}
          name="image"
          type="text"
          placeholder="Image"
          value={image}
        />
        <button type="submit">+ ADD FISH</button>
      </form>
    );
  }
}
