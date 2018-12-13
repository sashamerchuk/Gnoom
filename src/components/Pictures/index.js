import React from "react";
import RowItem from "./RowItem";
import "./Pictures.css";

export default class Pictures extends React.Component {
  render() {
    const items = [];

    for (let key = 0; key < this.props.pictures.length; key++) {
      items.push(
        <RowItem
          key={this.props.pictures[key].size}
          file={this.props.pictures[key]}
        />
      );

      console.log("items", items);
      console.log(this.props.pictures.length);
    }
    // Саня, що це???!!! для чого тут for? функція може повернути тільки один return
    if (this.props.pictures.length) {
      return (
        <table className="pictures">
          <tbody>
            <tr className="pictures__item">
              <th />
              <th>Original Size</th>
              <th>Compressed Size</th>
            </tr>
            {items}
          </tbody>
        </table>
      );
    }

    return <div />;
  }
}
