import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div class="welcome-bg-shape">
        <img
          class="welcome-first-shape"
          src={require("../static/img/shape/welcome-bg-1.png")}
          alt="Dopamine Positivity Website Shape Element"
        />
        <img
          class="welcome-second-shape"
          src={require("../static/img/shape/welcome-bg-2.png")}
          alt="Dopamine Positivity Website Shape Element"
        />
      </div>
    );
  }
}
