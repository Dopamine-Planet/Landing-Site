import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <main>
        <div className="available-app-area">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <div className="app-caption">
                  <div className="section-tittle section-tittle3">
                    <h1>404</h1>
                    <h2>The page you are trying to visit doesnot exist.</h2>
                    <p>
                      Our Positivity WebApp is coming soon and you can run it on
                      any device.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="app-img">
                  <img
                    src={require("../static/img/shape/available-app.png")}
                    alt="Dopamine Web App on Devices of all sizes"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Shape --> */}
          <div className="app-shape">
            <img
              src={require("../static/img/shape/app-shape-top.png")}
              alt=""
              className="app-shape-top heartbeat d-none d-lg-block"
            />
            <img
              src={require("../static/img/shape/app-shape-left.png")}
              alt=""
              className="app-shape-left d-none d-xl-block"
            />
            {/* <!-- <img src={require("../static/img/shape/app-shape-right.png")} alt="" className="app-shape-right bounce-animate "> --> */}
          </div>
        </div>
      </main>
    );
  }
}
