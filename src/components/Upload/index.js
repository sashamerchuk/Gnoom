import React from "react";

import "./Upload.css";

export default class extends React.Component {
  onInputChange = event => {
    let items = [];
    for (let key = 0; key < event.target.files.length; key++) {
      if (key < 10 && event.target.files[key].size < 50000000) {
        items.push(event.target.files[key]);
      }
    }
    this.props.onChange(items);
  };
  renderLabel() {
    return (
      <div className="label">
        <i className="material-icons">add_a_photo</i>
        <input
          id="menu_images"
          type="file"
          name="image"
          multiple
          accept="image/*"
          onChange={this.onInputChange}
        />
        <span className="text">Choose Your Foto!</span>
      </div>
    );
  }

  render() {
    return <div>{this.renderLabel()}</div>;
  }
}
