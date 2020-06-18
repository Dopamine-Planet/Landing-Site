import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <main>
        <div class="available-app-area">
          <div class="container">
            <div class="row d-flex justify-content-between">
              <div class="col-xl-5 col-lg-6">
                <div class="app-caption">
                  <div class="section-tittle section-tittle3">
                    <h1>404</h1>
                    <h2>The page you are trying to visit doesnot exist.</h2>
                    <p>
                      Our Positivity WebApp is coming soon and you can run it on
                      any device.
                    </p>
                    <div class="app-btn">
                      <a href="#" class="app-btn1">
                        <img
                          src={require("../static/img/shape/app_btn1.png")}
                          alt=""
                        />
                      </a>
                      <a href="#" class="app-btn2">
                        <img
                          src={require("../static/img/shape/app_btn2.png")}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="app-img">
                  <img
                    src={require("../static/img/shape/available-app.png")}
                    alt="Dopamine Web App on Devices of all sizes"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Shape --> */}
          <div class="app-shape">
            <img
              src={require("../static/img/shape/app-shape-top.png")}
              alt=""
              class="app-shape-top heartbeat d-none d-lg-block"
            />
            <img
              src={require("../static/img/shape/app-shape-left.png")}
              alt=""
              class="app-shape-left d-none d-xl-block"
            />
            {/* <!-- <img src={require("../static/img/shape/app-shape-right.png")} alt="" class="app-shape-right bounce-animate "> --> */}
          </div>
        </div>
      </main>
    );
  }
}
