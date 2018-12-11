import React from "react";
import RowItem from "./RowItem";
import "./Pictures.css";

export default class Pictures extends React.Component {
  render() {
    const items = [];

    for (let key = 0; key < this.props.pictures.length; key++) {
      console.log("pictuf", this.props.pictures[key].size);
      items.push(<RowItem key={key} file={this.props.pictures[key]} />);
    }
    return (
      <table className="pictures">
        <tbody>
          <tr className="pictures__item">
            <th>Compressed Size</th>
            <th>Original Size</th>
          </tr>
          {items}
        </tbody>
      </table>
    );
  }
}
