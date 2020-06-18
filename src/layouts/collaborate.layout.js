import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/breadcrumb.component";

export default class Collaborate extends Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>
            Collaborate With Us | Dopamine - Let Positivity Engulf You
          </title>
          <meta
            name="description"
            content="Let’s push each other out of our comfort zones, explore, encourage and explore opportunities. Also hear testimonials from our collaborators in their own words."
          />
        </Helmet>
        {/* <!-- Services Area Start --> */}
        <section class="service-area services-padding sky-blue">
          <Breadcrumb />
          <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6">
                <div class="section-tittle text-center">
                  <p>
                    Let’s push each other out of our comfort zones, explore,
                    encourage and explore opportunities!
                  </p>
                  <h2>
                    How Can We Help You
                    <br />
                    with Dopamine!
                  </h2>
                </div>
              </div>
            </div>
            {/* <!-- Section caption --> */}
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="services-caption text-center mb-30">
                  <div class="service-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/new/reach.png")}
                        alt="increase your reach with Dopamine"
                      />
                    </span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="#">Reach out to our audience</a>
                    </h4>
                    <p>Make an impression on our readers in 32+ countries.</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="services-caption active text-center mb-30">
                  <div class="service-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/new/web.png")}
                        alt="get website redirects from dopamine magazine"
                      />
                    </span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="#">Redirect to your website / social media</a>
                    </h4>
                    <p>
                      Embed links in our magazines for immediate contact with
                      potential customers for your business!
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="services-caption text-center mb-30">
                  <div class="service-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/new/social.png")}
                        alt="get likes and share with dopamine magazine"
                      />
                    </span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="#">Leverage from our engagement</a>
                    </h4>
                    <p>
                      Get featured on our active social media handles as well!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Services Area End --> */}

        {/* <!-- Our Customer Start --> */}
        <div class="our-customer pt-50 pb-100">
          <div class="container-fluid">
            <div class="our-customer-wrapper">
              {/* <!-- Section Tittle --> */}
              <div class="row d-flex justify-content-center">
                <div class="col-xl-8">
                  <div class="section-tittle text-center">
                    <p>Hear it from our collaborators in their own words!</p>
                    <h2>Testimonails</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="customar-active dot-style d-flex dot-style">
                    <div class="single-customer mb-100">
                      <div class="what-img">
                        <img
                          src={require("../static/img/testmonial/Ajay-Singh-Peelwa.png")}
                          alt="Ajay Singh Peelwa"
                        />
                      </div>
                      <div class="what-cap">
                        <h4>
                          <a href="https://www.facebook.com/Ajay-Singh-Peelwa-Artworks-1396297390643408/">
                            Ajay Singh Peelwa
                          </a>
                        </h4>
                        <p>
                          I had a chance to get featured in Dopamine, the
                          positivity magazine as a wildlife artist. The team
                          really featured my wildlife artworks well! They
                          focused on the need for wildlife and habitats
                          conservation which is the main aim for me to create my
                          artworks. Their work in the magazine is worth reading
                          and I would recommend it to everyone and wish them
                          success! Hope to see Dopamine achieve greater heights
                          in the future! Best wishes!
                        </p>
                      </div>
                    </div>

                    <div class="single-customer mb-100">
                      <div class="what-img">
                        <img
                          src={require("../static/img/testmonial/Payal-Lulla.png")}
                          alt="Payal Lulla"
                        />
                      </div>
                      <div class="what-cap">
                        <h4>
                          <a href="https://www.instagram.com/payal_lulla_arts/">
                            Payal Lulla
                          </a>
                        </h4>
                        <p>
                          Art has a way to reach deep inside our souls and
                          connect directly with our thoughts, feelings and
                          perceptions. Dopamine is a beautiful platform to show
                          our positive vision for life through creativity. It’s
                          a great opportunity given by these young creative
                          enthusiasts for the positive change. I would love to
                          congratulate the complete team of Dopamine. And Best
                          of luck for upcoming editions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Our Customer End --> */}
        <SubFooter />
      </main>
    );
  }
}
