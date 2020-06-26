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
        <section className="service-area services-padding sky-blue">
          <Breadcrumb />
          <div className="container">
            {/* <!-- Section Tittle --> */}
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="section-tittle text-center">
                  <h2>
                    How Can We Help You with Dopamine!
                    <p>
                      Let’s push each other out of our comfort zones, explore,
                      encourage and explore opportunities!
                    </p>
                  </h2>
                </div>
              </div>
            </div>
            {/* <!-- Section caption --> */}
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="services-caption text-center mb-30">
                  <div className="service-icon">
                    <span>
                      <img
                        className="img-fluid"
                        src={require("../static/img/new/reach.png")}
                        alt="increase your reach with Dopamine"
                      />
                    </span>
                  </div>
                  <div className="service-cap">
                    <h4>
                      <a href="#">Reach out to our audience</a>
                    </h4>
                    <p>Make an impression on our readers in 32+ countries.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="services-caption active text-center mb-30">
                  <div className="service-icon">
                    <span>
                      <img
                        className="img-fluid"
                        src={require("../static/img/new/web.png")}
                        alt="get website redirects from dopamine magazine"
                      />
                    </span>
                  </div>
                  <div className="service-cap">
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
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="services-caption text-center mb-30">
                  <div className="service-icon">
                    <span>
                      <img
                        className="img-fluid"
                        src={require("../static/img/new/social.png")}
                        alt="get likes and share with dopamine magazine"
                      />
                    </span>
                  </div>
                  <div className="service-cap">
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

        {/* <!-- Best Features Start --> */}
        <section className="best-features-area pb-100 pt-100 ">
          <div className="container">
            {/* <!-- Section Tittle --> */}
            {/* <!-- Section caption --> */}
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-features mb-70">
                  <div className="features-icon">
                    <span className="fa fa-bookmark"></span>
                  </div>
                  <div className="features-caption">
                    <h3>10,396+</h3>
                    <p>Magazine Readers</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-features mb-70">
                  <div className="features-icon">
                    <span className="fa fa-users"></span>
                  </div>
                  <div className="features-caption">
                    <h3>2,024+</h3>
                    <p>Instagram Followers</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-features mb-70">
                  <div className="features-icon">
                    <span className="fa fa-heart"></span>
                  </div>
                  <div className="features-caption">
                    <h3>12,000+</h3>
                    <p>Post Likes</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-features mb-70">
                  <div className="features-icon">
                    <span className="fa fa-gift"></span>
                  </div>
                  <div className="features-caption">
                    <h3>5,000+</h3>
                    <p>Weekly Impressions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Best Features End --> */}
        {/* <!-- Our Customer Start --> */}
        <div className="our-customer pt-50 pb-100">
          <div className="container-fluid">
            <div className="our-customer-wrapper">
              {/* <!-- Section Tittle --> */}
              <div className="row d-flex justify-content-center">
                <div className="col-xl-8">
                  <div className="section-tittle text-center">
                    <h2>
                      Testimonials
                      <p>Hear it from our collaborators in their own words!</p>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="customar-active dot-style d-flex dot-style">
                    <div className="single-customer mb-100">
                      <div className="what-img">
                        <img
                          src={require("../static/img/testmonial/Ajay-Singh-Peelwa.png")}
                          alt="Ajay Singh Peelwa"
                        />
                      </div>
                      <div className="what-cap">
                        <h4>
                          <a href="https://www.instagram.com/pinkcitypodcast/">
                            Lakshaya Arora
                          </a>
                        </h4>
                        <p>
                          My experience has been amazing. What they are doing is
                          really great. I thank Team Dopamine for considering my
                          work worth sharing. At last, with whatever we do in
                          life, we do need a positive mindset to do things in a
                          healthy way. Organic growth comes from not being
                          stressed, but optimistic and believing in yourself,
                          and that’s exactly what Dopamine is trying to tell
                          people. Really proud to be associated with them. The
                          world needs kindness right now, and they’re doing
                          their best in delivering the same.
                        </p>
                      </div>
                    </div>

                    <div className="single-customer mb-100">
                      <div className="what-img">
                        <img
                          src={require("../static/img/testmonial/Ajay-Singh-Peelwa.png")}
                          alt="Ajay Singh Peelwa"
                        />
                      </div>
                      <div className="what-cap">
                        <h4>
                          <a href="https://www.instagram.com/soshiadventures/">
                            Devanshi & Soumiya​
                          </a>
                        </h4>
                        <p>
                          Our experience with Dopamine has been perfect. We are
                          really grateful to the team for reaching out to us and
                          helping us spread the word about our food, experiences
                          & work. They are doing some amazing things and giving
                          a lot of artists and startups a voice and a platform
                          to be seen.
                        </p>
                      </div>
                    </div>

                    <div className="single-customer mb-100">
                      <div className="what-img">
                        <img
                          src={require("../static/img/testmonial/Ajay-Singh-Peelwa.png")}
                          alt="Ajay Singh Peelwa"
                        />
                      </div>
                      <div className="what-cap">
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

                    <div className="single-customer mb-100">
                      <div className="what-img">
                        <img
                          src={require("../static/img/testmonial/Payal-Lulla.png")}
                          alt="Payal Lulla"
                        />
                      </div>
                      <div className="what-cap">
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
