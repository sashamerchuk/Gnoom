import React, { Component } from "react";
import "./App.css";

import Upload from "./components/Upload";
import Pictures from "./components/Pictures";

class App extends Component {
  state = {
    pictures: []
  };

  onChange = data => {
    this.setState({ pictures: data });
  };

  render() {
    return (
      <div className="App">
        <main>
          <header className="App-header">
            <h1>Gnoom</h1>
          </header>

          <Upload onChange={this.onChange} />
          <Pictures pictures={this.state.pictures} />
        </main>
      </div>
    );
  }
}

export default App;
