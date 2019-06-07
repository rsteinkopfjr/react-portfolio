import React, { Component } from "react";
import logo from "./images/RS_Logo.png";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      theme: "",
      lightBtnHover: false,
      darkBtnHover: false
    };

    this.themeLight = this.themeLight.bind(this);
    this.hoverLight = this.hoverLight.bind(this);
    this.themeDark = this.themeDark.bind(this);
    this.hoverDark = this.hoverDark.bind(this);
  }
  themeLight() {
    this.setState({
      theme: "light"
    });
  }
  hoverLight() {
    this.setState({
      lightBtnHover: true
    });
  }
  themeDark() {
    this.setState({
      theme: "dark"
    });
  }
  hoverDark() {
    this.setState({
      darkBtnHover: true
    });
  }

  render() {
    return (
      <div className="App">
        <div
          className={
            this.state.lightBtnHover
              ? "lightHovered App-header"
              : "App-header" && this.state.darkBtnHover
              ? "darkHovered App-header"
              : "App-header"
          }
        >
          <img src={logo} className="App-logo" alt="logo" />
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Choose a Theme</h1>
              <div className="row">
                <div className="col-6">
                  <button
                    onClick={this.themeLight}
                    onMouseEnter={this.hoverLight}
                    onMouseLeave={() => this.setState({ lightBtnHover: false })}
                    type="button"
                    className="btn btn-outline-light btn-lg"
                    id="lightSide"
                  >
                    Light
                  </button>
                </div>
                <div className="col-6">
                  <button
                    onClick={this.themeDark}
                    onMouseEnter={this.hoverDark}
                    onMouseLeave={() => this.setState({ darkBtnHover: false })}
                    type="button"
                    className="btn btn-outline-dark btn-lg"
                    id="darkSide"
                  >
                    Dark
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
