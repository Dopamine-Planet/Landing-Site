import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/breadcrumb.component";
import Screenshot from "../components/screenshot.component";

export default class Premium extends Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>Get Premium | Dopamine - Let Positivity Engulf You</title>
          <meta name="description" content="Get Prium offerings by Dopamine." />
        </Helmet>
        {/* <!-- Best Features Start --> */}
        <section className="best-features-area section-padd4">
          <Breadcrumb />
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-xl-8 col-lg-10">
                {/* <!-- Section Tittle --> */}
                <div className="row">
                  <div className="col-lg-10 col-md-10">
                    <div className="section-tittle">
                      <h2>The Power of Premium</h2>
                    </div>
                  </div>
                </div>
                {/* <!-- Section caption --> */}
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-features mb-70">
                      <div className="features-icon">
                        <span className="flaticon-support"></span>
                      </div>
                      <div className="features-caption">
                        <h3>Unlock personalized self-care</h3>
                        <p>
                          Make optimism a habit, give happiness a chance by
                          engaging in the daily tasks we give to make your day
                          better!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-features mb-70">
                      <div className="features-icon">
                        <span className="flaticon-support"></span>
                      </div>
                      <div className="features-caption">
                        <h3>Get more out of Dopamine</h3>
                        <p>Exclusive content made especially for you</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="single-features mb-70">
                      <div className="features-icon">
                        <span className="flaticon-support"></span>
                      </div>
                      <div className="features-caption">
                        <h3>Pay your way</h3>
                        <p>After the free trial, ofcourse.</p>
                      </div>
                    </div>
                  </div>

                  <div className="slider-btns">
                    {/* <!-- Hero-btn --> */}
                    <a
                      data-animation="fadeInLeft"
                      data-delay="1.0s"
                      href="industries.html"
                      className="btn radius-btn"
                    >
                      Try for free now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Shpe --> */}
          <div className="features-shpae d-none d-lg-block">
            <img
              src={require("../static/img/shape/best-features.png")}
              alt="Dopamine Web App features"
            />
          </div>
        </section>
        {/* <!-- Best Features End --> */}

        {/* <!-- Best Pricing Start --> */}
        <section
          className="best-pricing pricing-padding"
          data-background={require("../static/img/gallery/best_pricingbg.jpg")}
        >
          <div className="container">
            {/* <!-- Section Tittle --> */}
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="section-tittle section-tittle2 text-center">
                  <h2>A little bit more</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Best Pricing End --> */}

        {/* <!-- Pricing Card Start --> */}
        <div className="pricing-card-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-card text-center mb-30">
                  <div className="card-top">
                    <span>1 Month</span>
                    <h4>
                      ₹ 150 <span>/ month</span>
                    </h4>
                  </div>
                  <div className="card-bottom">
                    {/* <!-- <ul>
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>

                            </ul> --> */}
                    <a
                      href="https://p-y.tm/mv-1XlW"
                      className="btn card-btn1"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-card  text-center mb-30">
                  <div className="card-top">
                    <span>6 Months</span>
                    <h4>
                      ₹ 125 <span>/ month</span>
                    </h4>
                  </div>
                  <div className="card-bottom">
                    {/* <!-- <ul>
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>    
                            </ul> --> */}
                    <a
                      href="https://www.paypal.com/paypalme2/dopamineplanet"
                      className="btn card-btn1"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-card text-center mb-30">
                  <div className="card-top">
                    <span>1 Year</span>
                    <h4>
                      ₹ 100 <span>/ month</span>
                    </h4>
                  </div>
                  <div className="card-bottom">
                    {/* <!-- <ul>
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>
                            </ul> --> */}
                    <a
                      href="https://www.paypal.com/paypalme2/dopamineplanet"
                      className="btn card-btn1"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Pricing Card End --> */}
        <Screenshot />
        <SubFooter />
      </main>
    );
  }
}
