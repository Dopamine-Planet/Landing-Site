import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/breadcrumb.component";

export default class About extends Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>About Us | Dopamine - Let Positivity Engulf You</title>
          <meta
            name="description"
            content="Curating and creating optimism in a life surrounded by chaos and negativity is all we do. Also meet our team - The people who make the magic happen."
          />
        </Helmet>
        {/* <!-- Best Pricing Start --> */}
        <section class="best-pricing best-pricing2 pricing-padding2">
          <Breadcrumb />
          <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6 col-md-8">
                <div class="section-tittle text-center">
                  <h2>
                    About Us
                    <p>
                      Curating and creating optimism in a life surrounded by
                      chaos and negativity is all we do.
                    </p>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Best Pricing End --> */}

        {/* <!-- Start Align Area --> */}
        <div class="whole-wrap pricing-card-area">
          <div class="container box_1170">
            <div class="section-top-border">
              <h3 class="mb-30">Our Vision</h3>
              <div class="row">
                <div class="col-md-4">
                  <img
                    src={require("../static/img/about/vision.png")}
                    alt="We are on a quest to provide positive content and make it a new norm, and strongly entail your life, beautifully yet subtly."
                    class="img-fluid"
                  />
                </div>
                <div class="col-md-8 mt-sm-20">
                  <p>
                    A glee, joyful life is at our fingertips. It’s we who have
                    to unfurl that magic within us. We, at Dopamine Planet, are
                    on a quest to create quality content and together make it a
                    new norm. This packet of kindness and joy called DOPAMINE is
                    intricately curated by bringing together beautiful and
                    creative minds who see the world from the brighter side and
                    we wish to entail your life strongly, beautifully yet
                    subtly. Together with you, we want to curate this parcel of
                    positivity which can be cherished forever.
                  </p>
                </div>
              </div>
            </div>
            <div class="section-top-border text-right">
              <h3 class="mb-30">Our Mission</h3>
              <div class="row">
                <div class="col-md-8">
                  <p class="text-right">
                    We hope this home of warmth and kindness leaves you with a
                    soothing comfort in your heart. In a world where everyone is
                    fixated at mending imperfections and only what’s wrong
                    stands out, we hope you choose optimism, choose positivity,
                    choose happiness, by embarking on this journey with us by
                    subscribing to us{" "}
                    <a
                      href="https://instagram.com/dopamineplanet"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      @dopamineplanet
                    </a>
                    .
                  </p>
                </div>
                <div class="col-md-4">
                  <img
                    src={require("../static/img/about/mission.png")}
                    alt="We aim to give you joy. We wish you would choose optimism and hope by embarking on a journey with us.  "
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div class="section-top-border">
              <h3 class="mb-30">Our Tagline</h3>
              <div class="row">
                <div class="col-md-4">
                  <img
                    src={require("../static/img/about/tagline.png")}
                    alt="This phrase is to brighten the day, it symbolises fireflies of hope and positivity when we’re consumed by negativity."
                    class="img-fluid"
                  />
                </div>
                <div class="col-md-8 mt-sm-20">
                  <p>
                    A catchy phrase to brighten your day and give you hope,
                    that’s what our tagline is all about. We allow so many
                    negative emotions to surround us, and even fall prey to some
                    of them. So let positivity engulf you and give you fireflies
                    of hope, positivity and smile.
                  </p>
                </div>
              </div>
            </div>
            <div class="section-top-border text-right">
              <h3 class="mb-30">Our Logo</h3>
              <div class="row">
                <div class="col-md-8">
                  <p class="text-right">
                    The scientific symbol of Dopamine, the happiness and
                    motivation chemical in our brain merged with a splash of
                    colours signifying joy to send a rush of Dopamine in your
                    body to boost you up, is what our logo is all about. Written
                    creatively to visually soothe, beautify and add a bit of
                    positivity is the zest behind our logo.
                  </p>
                </div>
                <div class="col-md-4">
                  <img
                    src={require("../static/img/logo/logo.png")}
                    alt="Our logo is the chemical structure of Dopamine, the happiness chemical.The zest behind it is to boost positivity and cheer."
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Align Area --> */}

        {/* <!-- Our Team Starts --> */}
        <section class="service-area sky-blue section-padding2">
          <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6">
                <div class="section-tittle text-center">
                  <h2>
                    Our Team
                    <p>Meet the people who make the magic happen!</p>
                  </h2>
                </div>
              </div>
            </div>
            {/* <!-- Section caption --> */}
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="services-caption text-center mb-30">
                  <div class="service-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/team/harshita.png")}
                        alt="Harshita Nagpal is the co-founder of Dopamine, leading the editing and creative team"
                      />
                    </span>
                  </div>
                  {/* <!-- <div class="what-img">
                            </div> --> */}
                  <div class="service-cap">
                    <h4>
                      <a href="https://www.instagram.com/hahaharshita">
                        Harshita Nagpal
                      </a>
                    </h4>
                    <h5>Co-founder</h5>
                    <p>
                      The boss lady dons multiple hats- writer, editor,
                      designer. She’s a professional multi-tasker and the best
                      and the coolest boss anyone can have. She makes sure that
                      the magic of dopamine comes alive with each and
                      everything.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="services-caption text-center mb-30">
                  <div class="service-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/team/mashu.png")}
                        alt="Mashu Ajmera, is the co-founder of Dopamine,takes care of all the technical aspects of the magazine and the website. "
                      />
                    </span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="https://www.instagram.com/mashuajmera">
                        Mashu Ajmera
                      </a>
                    </h4>
                    <h5>Co-founder</h5>
                    <p>
                      The cool one, who mostly handles all the technical aspects
                      ( which we don't understand) nicely and makes sure that
                      the very best and only quality content comes to fore
                      through his insights.
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
                        src={require("../static/img/team/srinidhi.png")}
                        alt="Srinidhi Srinivasan, is the content creator of Dopamine team. From captions, to articles to editing"
                      />
                    </span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="https://www.instagram.com/srini_1234/">
                        Srinidhi Srinivasan
                      </a>
                    </h4>
                    <h5>Content Creator</h5>

                    <p>
                      Those killer captions you see? She writes ‘em all!
                      Captions, articles, editing, blogs, she takes care of it
                      and adds the charm of words to bring the best quality
                      content upfront.
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
                        src={require("../static/img/team/samyak.png")}
                        alt="
                        Samyak Samantray, is the design engine of Dopamine team,who brings his A game to our curations by beautigying our work. 
                        "
                      />
                    </span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="https://www.instagram.com/samyak.samantaray/">
                        Samyak Samantaray
                      </a>
                    </h4>
                    <h5>Design</h5>
                    <p>
                      This creative head brings his A-game to our curations. The
                      amazing designs enhancing each and every content of
                      magazine, the posters making our social media look nicer,
                      all the designs are his talent and expertise.
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
                        src={require("../static/img/team/devika.png")}
                        alt="Devika Gujrani, is the Public relations person at Dopamine. She handles all the collaborations, contests, events etc. 
                        "
                      />
                    </span>
                  </div>
                  <div class="service-cap">
                    <h4>
                      <a href="https://www.instagram.com/devika_gujrani97/">
                        Devika Gujrani
                      </a>
                    </h4>
                    <h5>Public Relations</h5>
                    <p>
                      This girl handles our collaborations, contests, events and
                      with her mind bent towards ideas of outreach, she takes
                      our magazine to a greater audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Our Team Ends--> */}
        <SubFooter />
      </main>
    );
  }
}
