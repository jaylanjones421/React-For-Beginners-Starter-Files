import React, { Component } from "react";
import { getFunName } from "../../helpers";

export default class StorePicker extends Component {
  state = {
    storeName: ""
  };
  componentDidMount() {
    this.setState({ storeName: getFunName() });
  }

  goToStore = e => {
    e.preventDefault();
    this.props.history.push(`/store/${this.state.storeName}`);
  };

  handleStoreName = e => {
    this.setState({ storeName: e.target.value });
  };

  render() {
    const { storeName } = this.state;
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          onChange={this.handleStoreName}
          type="text"
          required
          value={storeName && storeName}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}
