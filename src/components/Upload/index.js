import React from "react";

import "./Upload.css";

export default class extends React.Component {
  onInputChange = event => {
    this.props.flower(Array.from(event.target.files));
  };
  renderLabel() {
    return (
      <label className="label">
        <i class="material-icons">add_a_photo</i>
        <input
          id="menu_images"
          type="file"
          name="image"
          multiple
          onChange={this.onInputChange}
        />
        Choose Your Foto!
      </label>
    );
  }

  render() {
    return <div>{this.renderLabel()}</div>;
  }
}
