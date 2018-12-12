import React from "react";
import Pictures from ".";

export default class RowItem extends React.Component {
  state = {
    src: "",
    size: ""
  };
  sendToServer(result) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    fetch("http://localhost:3005/upload", {
      headers: myHeaders,
      method: "POST",
      body: { picture: result }
    })
      .then(function(responce) {
        return responce.json();
      })
      .then(function(data) {
        console.log("hello", data);
      });
  }
  componentDidMount() {
    this.setState({ size: (this.props.file.size / 1000).toFixed(2) });
    let reader = new FileReader();
    reader.onload = e => {
      this.setState({ src: e.target.result });
      this.sendToServer(e.target.result);
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
        <td className="dataPict">{this.state.size}Kb</td>
        <td className="dataPict">1123</td>
        <td>
          <a className="downLoad" href={this.state.src}>
            Download
          </a>
        </td>
      </tr>
    );
  }
}
