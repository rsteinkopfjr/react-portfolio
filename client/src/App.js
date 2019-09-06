import React, { Component } from "react";
import logo from "./images/RS_Logo.png";
import "./App.css";
import "../../node_modules/animate.css/animate.min.css";
import DarkJumbo from "./DarkThemeJumbo";
import LightJumbo from "./LightThemeJumbo";

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
        {/* Theme Landing Page */}
        <div
          className={
            this.state.theme === "" ? "themeContainer" : "hideThemeContainer"
          }
        >
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
                <h1
                  className={
                    this.state.lightBtnHover
                      ? "lightHovHead display-4"
                      : "display-4" && this.state.darkBtnHover
                      ? "darkHovHead display-4"
                      : "display-4"
                  }
                >
                  Choose a Theme
                </h1>
                <div className="row">
                  <div className="col-6">
                    <button
                      onClick={this.themeLight}
                      onMouseEnter={this.hoverLight}
                      onMouseLeave={() =>
                        this.setState({ lightBtnHover: false })
                      }
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
                      onMouseLeave={() =>
                        this.setState({ darkBtnHover: false })
                      }
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
        {/* End Theme Landing Page */}

        {/* Main Portfolio */}
        <div
          className={
            this.state.theme === "" ? "hideMainContainer" : "mainContainer"
          }
        >
          <div
            className={
              this.state.theme === "light" ? "lightPortfolio" : "darkPortfolio"
            }
          >
            {/* Nav Bar Element */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">
                <img src={logo} width="50" height="50" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id={
                        this.state.theme === "light"
                          ? "changeThemeLight"
                          : "changeThemeDark"
                      }
                      href="/"
                    >
                      Change Theme
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* End Nav Bar Element */}

            {/* Carousel Element */}
            {this.state.theme === "light" ? <LightJumbo /> : <DarkJumbo />}
            {/* <div className="jumbotron">
              <div className="container">
                <div
                  className="carousel"
                  data-ride="carousel"
                  data-pause="false"
                >
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active animated fadeInLeftBig"
                      data-interval="4000"
                    >
                      <div
                        className={
                          this.state.theme === "light"
                            ? "carousel-quote-light"
                            : "carousel-quote-dark"
                        }
                      >
                        <h2>Hi, I'm Rob!</h2>
                      </div>
                    </div>
                    <div
                      className="carousel-item animated fadeInLeftBig"
                      data-interval="7000"
                    >
                      <div
                        className={
                          this.state.theme === "light"
                            ? "carousel-quote-light"
                            : "carousel-quote-dark"
                        }
                      >
                        <h2>
                          "I want to get to know you better, if you want to get
                          to know me better as well."
                        </h2>
                        <h2>- Adventureland</h2>
                        <button
                          type="button"
                          className={
                            this.state.theme === "light"
                              ? "btn btn-outline-primary btn-lg carousel-btn-light"
                              : "btn btn-outline-primary btn-lg carousel-btn-dark"
                          }
                        >
                          Learn About Me
                        </button>
                      </div>
                    </div>
                    <div
                      className="carousel-item animated fadeInLeftBig"
                      data-interval="7000"
                    >
                      <div
                        className={
                          this.state.theme === "light"
                            ? "carousel-quote-light"
                            : "carousel-quote-dark"
                        }
                      >
                        <h2>
                          "Nunchuck skills, bo hunting skills, computer hacking
                          skills. Girls only like guys who have great skills."
                        </h2>
                        <h2>- Napoleon Dynamite</h2>
                        <button
                          type="button"
                          className={
                            this.state.theme === "light"
                              ? "btn btn-outline-primary btn-lg carousel-btn-light"
                              : "btn btn-outline-primary btn-lg carousel-btn-dark"
                          }
                        >
                          See More Skills
                        </button>
                      </div>
                    </div>
                    <div
                      className="carousel-item animated fadeInLeftBig"
                      data-interval="7000"
                    >
                      <div
                        className={
                          this.state.theme === "light"
                            ? "carousel-quote-light"
                            : "carousel-quote-dark"
                        }
                      >
                        <h2>
                          "My best work, I must admit. Simple, elegant, yet
                          bold."
                        </h2>
                        <h2>- The Incredibles</h2>
                        <button
                          type="button"
                          className={
                            this.state.theme === "light"
                              ? "btn btn-outline-primary btn-lg carousel-btn-light"
                              : "btn btn-outline-primary btn-lg carousel-btn-dark"
                          }
                        >
                          See My Work
                        </button>
                      </div>
                    </div>
                    <div
                      className="carousel-item animated fadeInLeftBig"
                      data-interval="7000"
                    >
                      <div
                        className={
                          this.state.theme === "light"
                            ? "carousel-quote-light"
                            : "carousel-quote-dark"
                        }
                      >
                        <h2>
                          "The first word in entertainment. Management..
                          Computers.. Black leather gloves.. Security.. And..
                          Investors? Possibly you!"
                        </h2>
                        <h2>- Step Brothers</h2>
                        <button
                          type="button"
                          className={
                            this.state.theme === "light"
                              ? "btn btn-outline-primary btn-lg carousel-btn-light"
                              : "btn btn-outline-primary btn-lg carousel-btn-dark"
                          }
                        >
                          Contact Me
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* End Carousel Element */}

            {/* Scroll Icon  Element */}
            <div className="container scroll-container">
              <div
                className={
                  this.state.theme === "light"
                    ? "chevron chevron-light"
                    : "chevron chevron-dark"
                }
              />
              <div
                className={
                  this.state.theme === "light"
                    ? "chevron chevron-light"
                    : "chevron chevron-dark"
                }
              />
              <div
                className={
                  this.state.theme === "light"
                    ? "chevron chevron-light"
                    : "chevron chevron-dark"
                }
              />
            </div>
            {/* End Scroll Icon Element */}

            {/* About Element */}
            <div className="jumbotron">
              <div className="container">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End About Element */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
