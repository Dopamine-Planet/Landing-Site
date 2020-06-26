import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="welcome-bg-shape">
        <img
          className="welcome-first-shape"
          src={require("../static/img/shape/welcome-bg-1.png")}
          alt="Dopamine Positivity Website Shape Element"
        />
        <img
          className="welcome-second-shape"
          src={require("../static/img/shape/welcome-bg-2.png")}
          alt="Dopamine Positivity Website Shape Element"
        />
      </div>
    );
  }
}
