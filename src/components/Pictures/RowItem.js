import React from "react";

export default class RowItem extends React.Component {
  state = {
    src: "",
    size: ""
  };
  componentDidMount() {
    console.log("Prop", this.props.file);
    this.setState({ size: (this.props.file.size / 1000000).toFixed(1) });
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
        <td className="dataPict">{this.state.size}Mb</td>
        <td className="dataPict">1123</td>
        <td>
          <a href={this.props.file}>Download</a>
        </td>
      </tr>
    );
  }
}
