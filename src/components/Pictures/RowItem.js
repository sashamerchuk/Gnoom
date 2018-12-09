import React from "react";

export default class RowItem extends React.Component {
  state = {
    src: ""
  };
  componentDidMount() {
    let reader = new FileReader();
    console.log("File ", this.props.file);
    reader.readAsDataURL(this.props.file);
    this.setState();
  }
  render() {
    return (
      <tr className="pictures__item">
        <td>
          <img alt={"Gnoom"} src={this.state.src} className="pictures__image" />
        </td>
        <td className="dataPict">200</td>
        <td className="dataPict">1123</td>
        <td>
          <a href="https://scontent-waw1-1.cdninstagram.com/vp/a9911f47f85739e5f4b8e57b445e1f6d/5C560C06/t51.2885-15/sh0.08/e35/s640x640/43169104_163062131308544_2668699210402157381_n.jpg">
            Download
          </a>
        </td>
      </tr>
    );
  }
}
