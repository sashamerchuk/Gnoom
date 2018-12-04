import React from "react";

import "./Pictures.css";

export default class Pictures extends React.Component {
  renderItem() {
    return (
      <tr className="pictures__item">
        <td>
          <img
            alt={"Gnoom"}
            src="https://scontent-waw1-1.cdninstagram.com/vp/a9911f47f85739e5f4b8e57b445e1f6d/5C560C06/t51.2885-15/sh0.08/e35/s640x640/43169104_163062131308544_2668699210402157381_n.jpg"
            className="pictures__image"
          />
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
  render() {
    return (
      <table className="pictures">
        <tbody>
          <tr className="pictures__item">
            <th>Compressed Size</th>
            <th>Original Size</th>
          </tr>
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
        </tbody>
      </table>
    );
  }
}
