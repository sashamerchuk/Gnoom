import React from "react";

import "./Upload.css";

export default class extends React.Component {
  onInputChange = event => {
    this.props.flower(Array.from(event.target.files));
  };
  renderLabel() {
    return (
      <div>
        <label className="label">
          <input
            id="menu_images"
            type="file"
            name="image"
            multiple
            onChange={this.onInputChange}
          />
          Choose Your Foto!
        </label>
      </div>
    );
  }

  render() {
    return <div>{this.renderLabel()}</div>;
  }
}
