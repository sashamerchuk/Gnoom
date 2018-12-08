import React, { Component } from "react";
import "./App.css";

import Upload from "./components/Upload";
import Pictures from "./components/Pictures";

class App extends Component {
  state = {
    pictures: [],
    name: "Sasha"
  };

  onChange = picture => {
    this.setState({ pictures: [picture] });

    console.log("fileekf", this.state.pictures);
    for (let value of this.state.pictures) {
      value = this.setState({ pictures: [picture] });
      return value;
    }
    //Array.from(this.setState({ pictures: [pictures] }));

    //console.log("this", this);
    //console.log("THIS.STATE", this.state);
    return picture;
    //console.log("State is ", this.state);
    //console.log("this ", this);
    //console.log("props in app", this.props);
    //this.setState({
    //picture: [...this.state.pictures, ...pictures]
    //});
    // let reader = new FileReader();
    //for (let key in this.pictures.setState.picture) {
    // reader.readAsDataURL(key);
    //return reader;
    //}
  };
  name = "Sasha";

  render() {
    return (
      <div className="App">
        <main>
          <header className="App-header">
            <h1>Gnoom</h1>
          </header>
          <Upload flower={this.onChange} name={this.name} />
          <Pictures pictures={this.state.pictures} />
        </main>
      </div>
    );
  }
}

export default App;
