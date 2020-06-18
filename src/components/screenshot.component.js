import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};

export default class Screenshot extends Component {
  render() {
    return (
      <div class="applic-apps section-padding2">
        <div class="container-fluid">
          <div class="row">
            {/* <!-- slider Heading --> */}
            <div class="col-xl-4 col-lg-4 col-md-8">
              <div class="single-cases-info mb-30">
                <h3>
                  Dopamine App
                  <br /> Screenshot
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consecadipiscing elit, sed do
                  eiusmod tempor incididunt ut ore et dolore magna aliqua. Quis
                  ipsum suspendisse gravida. Risus commodo viverra maecenasan
                  lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
            {/* react-Owl */}
            <OwlCarousel
              items={4}
              {...options}
              className="owl-theme col-xl-8 col-lg-8 col-md-col-md-7"
            >
              <div class="single-cases-img">
                <img
                  src={require("../static/img/gallery/App1.png")}
                  alt="Dopamine Positivity WebApp Features"
                />
              </div>
              <div class="single-cases-img">
                <img
                  src={require("../static/img/gallery/App2.png")}
                  alt="Dopamine Positivity WebApp Features"
                />
              </div>
              <div class="single-cases-img">
                <img
                  src={require("../static/img/gallery/App3.png")}
                  alt="Dopamine Positivity WebApp Features"
                />
              </div>
              <div class="single-cases-img">
                <img
                  src={require("../static/img/gallery/App4.png")}
                  alt="Dopamine Positivity WebApp Features"
                />
              </div>
              <div class="single-cases-img">
                <img
                  src={require("../static/img/gallery/App1.png")}
                  alt="Dopamine Positivity WebApp Features"
                />
              </div>
            </OwlCarousel>
            {/* react-Owl-end */}
            {/* <!-- OwL --> */}
            <div class="col-xl-8 col-lg-8 col-md-col-md-7">
              <div class="app-active owl-carousel">
                <div class="single-cases-img">
                  <img
                    src={require("../static/img/gallery/App1.png")}
                    alt="Dopamine Positivity WebApp Features"
                  />
                </div>
                <div class="single-cases-img">
                  <img
                    src={require("../static/img/gallery/App2.png")}
                    alt="Dopamine Positivity WebApp Features"
                  />
                </div>
                <div class="single-cases-img">
                  <img
                    src={require("../static/img/gallery/App3.png")}
                    alt="Dopamine Positivity WebApp Features"
                  />
                </div>
                <div class="single-cases-img">
                  <img
                    src={require("../static/img/gallery/App4.png")}
                    alt="Dopamine Positivity WebApp Features"
                  />
                </div>
                <div class="single-cases-img">
                  <img
                    src={require("../static/img/gallery/App1.png")}
                    alt="Dopamine Positivity WebApp Features"
                  />
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}
