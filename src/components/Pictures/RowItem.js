import React from "react";

export default class RowItem extends React.Component {
  state = {
    src: "",
    size: ""
  };
  sendToServer() {
    let formData = new FormData();
    formData.append("picture", this.props.file, this.props.file.filename);
    fetch("http://localhost:3005/upload", {
      method: "POST",
      body: formData
    })
      .then(function(responce) {
        if (responce.ok) {
          return responce.json();
        }
        throw new Error("Network responce that ");
      })
      .then(data => {
        this.setState({ compressed: data.source });
        this.setState({ compressedSize: data.size / 1000 });
      })
      .catch(function(error) {
        console.log("There is a problem " + error.message);
      });
  }
  componentDidMount() {
    this.sendToServer();
    this.setState({ size: (this.props.file.size / 1000).toFixed(2) });
    let reader = new FileReader();
    reader.onload = e => {
      this.setState({ src: e.target.result });
    };
    if (this.props.file) {
      reader.readAsDataURL(this.props.file);
    }
  }

  render() {
    return (
      <tr className="pictures__item">
        <td>
          <img alt={"Gnoom"} src={this.state.src} className="pictures__image" />
        </td>
        <td className="dataPict">{this.state.compressedSize}Kb</td>
        <td className="dataPict">{this.state.size}Kb</td>

        <td>
          {this.state.compressed && (
            <a className="downLoad" href={this.state.compressed} download>
              Download
            </a>
          )}
        </td>
      </tr>
    );
  }
}
