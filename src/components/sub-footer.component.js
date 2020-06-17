import React, { Component } from "react";

export default class SubFooter extends Component {
  render() {
    return (
      <div class="say-something-aera pt-90 pb-90 fix">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="offset-xl-1 offset-lg-1 col-xl-5 col-lg-5">
              <div class="say-something-cap">
                <h2>Our WebApp Available For Any Device</h2>
              </div>
            </div>
            <div class="col-xl-2 col-lg-3">
              <div class="say-btn">
                <a href="https://app.dopamineplanet.com" class="btn radius-btn">
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- shape --> */}
        <div class="say-shape">
          <img
            src={require("../static/img/shape/say-shape-left.png")}
            alt=""
            class="say-shape1 rotateme d-none d-xl-block"
          />
          <img
            src={require("../static/img/shape/say-shape-right.png")}
            alt=""
            class="say-shape2 d-none d-lg-block"
          />
        </div>
      </div>
    );
  }
}
