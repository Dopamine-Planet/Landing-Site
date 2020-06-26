import React, { Component } from "react";

export default class SubFooter extends Component {
  render() {
    return (
      <div className="say-something-aera pt-90 pb-90 fix">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="offset-xl-1 offset-lg-1 col-xl-5 col-lg-5">
              <div className="say-something-cap">
                <h2>Our WebApp Available For Any Device</h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3">
              <div className="say-btn">
                <a
                  href="https://app.dopamineplanet.com"
                  className="btn radius-btn"
                >
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- shape --> */}
        <div className="say-shape">
          <img
            src={require("../static/img/shape/say-shape-left.png")}
            alt="Dopamine Positivity Website Shape Element"
            className="say-shape1 rotateme d-none d-xl-block"
          />
          <img
            src={require("../static/img/shape/say-shape-right.png")}
            alt="Dopamine Positivity Website Shape Element"
            className="say-shape2 d-none d-lg-block"
          />
        </div>
      </div>
    );
  }
}
