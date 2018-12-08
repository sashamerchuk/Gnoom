import React from "react";

import "./Upload.css";

export default class extends React.Component {
  onInputChange = event => {
    console.log("file is ", this.props.flower);

    //Array.from(event.target.files);
    // this.props.flower(this.setState({ pictures: [event.target.files] }));
    this.props.flower();
    console.log("Props in upload", this.props.flower);
    console.log("Flower is is ", this.props);
    console.log("Files is", event.target.files);
  };
  renderLabel() {
    return (
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
    );
  }

  render() {
    return <div>{this.renderLabel()}</div>;
  }
}
