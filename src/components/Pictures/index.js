import React from "react";
import RowItem from "./RowItem";
import "./Pictures.css";
import FalseItem from "./falseItem";

export default class Pictures extends React.Component {
  render() {
    const items = [];

    for (let key = 0; key < this.props.pictures.length; key++) {
      console.log("pictuf", this.props.pictures[key].size);
      if (key < 10 && this.props.pictures[key].size < 50000000) {
        items.push(<RowItem key={key} file={this.props.pictures[key]} />);
      } else {
        items.push(<FalseItem key={key} file={this.props.pictures[key]} />);
        console.log("You download more than 10 foto!");
      }
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
