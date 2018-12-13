import React from "react";
import RowItem from "./RowItem";
import "./Pictures.css";

export default class Pictures extends React.Component {
  render() {
    const items = [];

    for (let key = 0; key < this.props.pictures.length; key++) {
      items.push(<RowItem key={key} file={this.props.pictures[key]} />);

      console.log("items", items);
      console.log(this.props.pictures.length);
    }
    for (let key1 = 0; key1 < this.props.pictures.length; ++key1) {
      return (
        <table className="pictures">
          <tbody>
            <tr className="pictures__item">
              <th />
              <th>Compressed Size</th>
              <th>Original Size</th>
            </tr>
            {items}
          </tbody>
        </table>
      );
    }

    return <div />;
  }
}
