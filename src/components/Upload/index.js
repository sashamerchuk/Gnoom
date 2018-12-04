import React from "react";

import "./Upload.css";

export default class extends React.Component {
  render() {
    const { onChange } = this.props;
    console.log("onChange is;", onChange);
    return (
      <button>
        <i className="material-icons">add_photo_alternate</i>
        Upload Button
      </button>
    );
  }
}
