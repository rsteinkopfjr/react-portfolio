import React, { Component } from "react";
import "./App.css";
import "../../node_modules/animate.css/animate.min.css";
import letterH from "./images/alphabet/h-dark-full.png";
import letterI from "./images/alphabet/i-dark-full.png";
import letterM from "./images/alphabet/m-dark-full.png";
import letterR from "./images/alphabet/r-dark-full.png";
import letterO from "./images/alphabet/o-dark-full.png";
import letterB from "./images/alphabet/b-dark-full.png";

class LightJumbo extends Component {

  render() {
    return (
      <div className="LightJumbo">
        <div className="jumbotron">
          <div className="container">
            <img
              src={letterH}
              className="letterH"
              alt="letter h"
              height="100"
              width="100"
            />
            <img
              src={letterI}
              className="letterI"
              alt="letter i"
              height="100"
              width="60"
            />
            <img
              src={letterI}
              className="letterI"
              alt="letter i"
              height="100"
              width="60"
            />
            <img
              src={letterM}
              className="letterM"
              alt="letter m"
              height="100"
              width="100"
            />
            <img
              src={letterR}
              className="letterR"
              alt="letter r"
              height="100"
              width="100"
            />
            <img
              src={letterO}
              className="letterO"
              alt="letter o"
              height="100"
              width="100"
            />
            <img
              src={letterB}
              className="letterB"
              alt="letter b"
              height="100"
              width="100"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LightJumbo;
