import React, { Component } from "react";
import Magazine from "../components/magazine.component";
import Screenshot from "../components/screenshot.component";
import EventList from "../components/eventList.component";

export default class Home extends Component {
  render() {
    return (
      <main>
        {/* <!-- Slider Area Start--> */}
        <div class="slider-area ">
          <div class="slider-active">
            <div class="single-slider slider-height slider-padding sky-blue d-flex align-items-center">
              <div class="container">
                <div class="row d-flex align-items-center">
                  <div class="col-lg-6 col-md-9 ">
                    <div class="hero__caption">
                      <span data-animation="fadeInUp" data-delay=".4s">
                        Let Positivity Engulf You
                      </span>
                      <h1 data-animation="fadeInUp" data-delay=".6s">
                        Spark joy
                        <br />
                        with Dopamine
                      </h1>
                      <p data-animation="fadeInUp" data-delay=".8s">
                        Your thoughts feed your soul, so thinking good and
                        pleasant is of utmost importance. With this in our mind,
                        we curated some joyous and optimistic magazines. And
                        soon we’ll release an app as well.
                      </p>
                      {/* <!-- Slider btn --> */}
                      <div class="slider-btns">
                        {/* <!-- Hero-btn --> */}
                        <a
                          data-animation="fadeInLeft"
                          data-delay="1.0s"
                          href="https://app.dopamineplanet.com"
                          class="btn radius-btn"
                        >
                          Coming Soon!
                        </a>
                        {/* <!-- Video Btn --> */}
                        <a
                          data-animation="fadeInRight"
                          data-delay="1.0s"
                          class="popup-video video-btn ani-btn"
                          target="_blank"
                          rel="noreferrer noopener"
                          href="https://www.instagram.com/p/BwOxXaAD0KC/"
                        >
                          <i class="fas fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div
                      class="hero__img d-none d-lg-block f-right"
                      data-animation="fadeInRight"
                      data-delay="1s"
                    >
                      <img
                        src={require("../static/img/hero/hero_right.png")}
                        alt="Dopamine App Homepage Screen Design"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Slider Area End --> */}
        {/* <!-- Best Features Start --> */}
        <section class="best-features-area section-padd4">
          <div class="container">
            <div class="row justify-content-end">
              <div class="col-xl-8 col-lg-10">
                {/* <!-- Section Tittle --> */}
                <div class="row">
                  <div class="col-lg-10 col-md-10">
                    <div class="section-tittle">
                      <h2>Some of the best features Of Our WebApp!</h2>
                    </div>
                  </div>
                </div>
                {/* <!-- Section caption --> */}
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/new/hand.svg")}
                            alt="Daily tasks icon"
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Daily tasks</h3>
                        <p>
                          Make optimism a habit, give happiness a chance by
                          engaging in the daily tasks we give to make your day
                          better!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/new/calm.svg")}
                            alt="Positive and calming content icon"
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Positive content</h3>
                        <p>
                          Easy-to-consume positive content in the form of
                          magazine articles and personalized review
                          recommendations of everything from music to movies or
                          podcasts and books. There’s something for everyone!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/new/love-and-romance.svg")}
                            alt="Gratitude list icon"
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Gratitude List</h3>
                        <p>
                          Let’s build a routine that increases positive
                          emotions. Realize how blessed you really are!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="single-features mb-70">
                      <div class="features-icon">
                        <span>
                          <img
                            class="img-fluid"
                            src={require("../static/img/new/love-and-romance.svg")}
                            alt="Express icon"
                          />
                        </span>
                      </div>
                      <div class="features-caption">
                        <h3>Express</h3>
                        <p>
                          Inspire and be inspired. Take a moment and express
                          what's in your heart, your thoughts might spark
                          positivity in a whole community!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Shpe --> */}
          <div class="features-shpae d-none d-lg-block">
            <img
              src={require("../static/img/shape/best-features.png")}
              alt="Dopamine app features screen designs"
            />
          </div>
        </section>
        {/* <!-- Best Features End --> */}
        {/* <!-- Services Area Start --> */}
        <section class="service-area sky-blue section-padding2">
          <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6">
                <div class="section-tittle text-center">
                  <h2>
                    How We Can Help You
                    <br />
                    with Dopamine
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
                        src={require("../static/img/new/happierlife.png")}
                        alt="positive life icon"
                      />
                    </span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="#">Lead a more positive life</a>
                    </h4>
                    <p>
                      Daily meaningful activites will help keep you cheerful.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="services-caption active text-center mb-30">
                  <div class="service-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/new/poscontent.png")}
                        alt="Positivity content icon"
                      />
                    </span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="#">Consume quality positive content</a>
                    </h4>
                    <p>
                      This will energize your mind and take your negative
                      thoughts away.
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
                        src={require("../static/img/new/gratitude.png")}
                        alt="Build gratitude icon"
                      />
                    </span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="#">Build Gratitude</a>
                    </h4>
                    <p>
                      It's important to say thanks and acknowledge how blessed
                      you really are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Services Area End --> */}
        <Screenshot />
        {/* <!-- Best Pricing Start --> */}
        <section class="best-pricing pricing-padding">
          <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6 col-md-8">
                <div class="section-tittle section-tittle2 text-center">
                  <h2>Our Recent Events</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Best Pricing End --> */}
        <EventList limit={3} />
        <Magazine />
        {/* <!-- Available App  Start--> */}
        <div class="available-app-area">
          <div class="container">
            <div class="row d-flex justify-content-between">
              <div class="col-xl-5 col-lg-6">
                <div class="app-caption">
                  <div class="section-tittle section-tittle3">
                    <h2>Our WebApp Available For Any Device Coming Soon</h2>
                    <p>
                      No matter what kind of tech device you use, you will be
                      able to access our responsive user-friendly web app
                      anytime, anywhere from any device to add positivity to
                      your day.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="app-img">
                  <img
                    src={require("../static/img/shape/available-app.png")}
                    alt="Dopamine app Screen Design for Laptop, phone and TV"
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
        {/* <!-- Available App End-->      */}
      </main>
    );
  }
}
