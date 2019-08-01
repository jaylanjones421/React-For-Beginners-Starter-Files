import React, { Component } from "react";
import { getFunName } from "../../helpers";

export default class StorePicker extends Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" required defaultValue={getFunName()} />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}
