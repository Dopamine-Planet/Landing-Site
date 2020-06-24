import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import Magazine from "../components/magazine.component";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/breadcrumb.component";
import firebase from "../config/database";
import Skeleton from "react-loading-skeleton";

export default class Issue extends Component {
  state = { magazine: {} };

  componentDidMount() {
    var firestore = firebase.firestore();
    firestore
      .collection("magazines")
      .where("slug", "==", this.props.match.params.slug)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs[0].data();
        this.setState({ magazine: data });
      });
  }

  render() {
    return (
      <main>
        <Helmet>
          {this.state.magazine.title && (
            <title>{`${this.state.magazine.title} | Dopamine - Let Positivity Engulf You`}</title>
          )}
          {this.state.magazine.excerpt && (
            <meta name="description" content={this.state.magazine.excerpt} />
          )}
        </Helmet>
        {/* <!-- Slider Area Start--> */}
        <div class="services-area">
          <Breadcrumb />
          <div class="container">
            {/* <!-- Section-tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <div class="section-tittle text-center mb-80">
                  <p>
                    {this.state.magazine.subtitle || <Skeleton count={3} />}
                  </p>
                  <h2>{this.state.magazine.title || <Skeleton />}</h2>
                </div>
              </div>
            </div>
            <div class="row d-flex justify-content-center">
              <div class="col-lg-9 text-center">
                <div class="feature-img">
                  {this.state.magazine.display ? (
                    this.state.magazine.display.embed ? (
                      <div
                        class="embed-container"
                        data-page-width="453"
                        data-page-height="640"
                        id="ypembedcontainer"
                      >
                        <iframe
                          src={this.state.magazine.display.embed}
                          frameborder="0"
                          title={this.state.magazine.title}
                          allowfullscreen="true"
                          allowtransparency="true"
                        ></iframe>
                      </div>
                    ) : (
                      <a
                        href={this.state.magazine.display.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        class="magazine-gif"
                      >
                        <img
                          class="img-fluid"
                          src={require(`../static/img/${this.state.magazine.display.teaser}`)}
                          alt={this.state.magazine.title}
                        />
                      </a>
                    )
                  ) : (
                    <Skeleton height={300} />
                  )}
                </div>
                <div class="section-tittle">
                  <h3>
                    <br />
                  </h3>
                </div>
                <div class="section-tittle">
                  <h3>Read it. Feel it. Absorb it. And share it!</h3>
                </div>
                <div class="section-tittle">
                  <h3>
                    <br />
                  </h3>
                </div>

                <div class="slider-btns">
                  {/* <!-- Hero-btn --> */}
                  <a
                    data-animation="fadeInLeft"
                    data-delay="1.0s"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScLK4Hhe9YK_nJw0wbIUEmoavJvn2SqUOwSOKQh-gRGCozcFw/viewform"
                    class="btn radius-btn mb-4 mr-4"
                  >
                    GIVE FEEDBACK
                  </a>
                  {/* <!-- Hero-btn --> */}
                  <a
                    data-animation="fadeInLeft"
                    data-delay="1.0s"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScaVzYFnT8nVicqn8HZCr0Iw0y6SrMQHrMz4xx4o1loNFGVew/viewform"
                    class="btn radius-btn card-btn1 mb-4"
                  >
                    Get Featured
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Slider Area End--> */}

        {/* <!-- Best Features Start --> */}
        <section class="best-features-area mt-100 pt-100 sky-blue">
          <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6">
                <div class="section-tittle text-center">
                  <h2>
                    Contributors
                    <p>
                      You might not know how many people your work can help feel
                      better. Maybe someone will smile. Maybe you’ll make
                      someone’s day.
                    </p>
                  </h2>
                </div>
              </div>
            </div>
            {/* <!-- Section caption --> */}
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="single-features mb-70">
                  <div class="features-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/contributors/writer.png")}
                        alt={this.state.magazine.title + "Writers"}
                      />
                    </span>
                  </div>
                  <div class="features-caption">
                    <h3>Writers</h3>
                    <p>
                      {this.state.magazine.contributors ? (
                        this.state.magazine.contributors.writers.map(
                          (writer, i) => (
                            <a
                              href={writer.profile}
                              rel="noreferrer noopener"
                              target="_blank"
                              key={i}
                            >
                              <span>{writer.name} | </span>
                            </a>
                          )
                        )
                      ) : (
                        <Skeleton count={3} />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-features mb-70">
                  <div class="features-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/contributors/designers.png")}
                        alt={this.state.magazine.title + "Designers"}
                      />
                    </span>
                  </div>
                  <div class="features-caption">
                    <h3>Designers</h3>
                    <p>
                      {this.state.magazine.contributors ? (
                        this.state.magazine.contributors.designers.map(
                          (designer, i) => (
                            <a
                              href={designer.profile}
                              rel="noreferrer noopener"
                              target="_blank"
                              key={i}
                            >
                              <span>{designer.name} | </span>
                            </a>
                          )
                        )
                      ) : (
                        <Skeleton count={2} />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-features mb-70">
                  <div class="features-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/contributors/photo.png")}
                        alt={this.state.magazine.title + "Photography"}
                      />
                    </span>
                  </div>
                  <div class="features-caption">
                    <h3>Photography</h3>
                    <p>
                      {this.state.magazine.contributors ? (
                        this.state.magazine.contributors.photographers.map(
                          (photographer, i) => (
                            <a
                              href={photographer.profile}
                              rel="noreferrer noopener"
                              target="_blank"
                              key={i}
                            >
                              <span>{photographer.name} | </span>
                            </a>
                          )
                        )
                      ) : (
                        <Skeleton count={3} />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-features mb-70">
                  <div class="features-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/contributors/art.png")}
                        alt={this.state.magazine.title + "Artists"}
                      />
                    </span>
                  </div>
                  <div class="features-caption">
                    <h3>Artists and Illustrators</h3>
                    <p>
                      {this.state.magazine.contributors ? (
                        this.state.magazine.contributors.artists.map(
                          (artist, i) => (
                            <a
                              href={artist.profile}
                              rel="noreferrer noopener"
                              target="_blank"
                              key={i}
                            >
                              <span>{artist.name} | </span>
                            </a>
                          )
                        )
                      ) : (
                        <Skeleton count={3} />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-features mb-70">
                  <div class="features-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/contributors/review.png")}
                        alt={this.state.magazine.title + "Reviewers"}
                      />
                    </span>
                  </div>
                  <div class="features-caption">
                    <h3>Reviewers</h3>
                    <p>
                      {this.state.magazine.contributors ? (
                        this.state.magazine.contributors.reviewers.map(
                          (reviewer, i) => (
                            <a
                              href={reviewer.profile}
                              rel="noreferrer noopener"
                              target="_blank"
                              key={i}
                            >
                              <span>{reviewer.name} | </span>
                            </a>
                          )
                        )
                      ) : (
                        <Skeleton count={2} />
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="single-features mb-70">
                  <div class="features-icon">
                    <span>
                      <img
                        class="img-fluid"
                        src={require("../static/img/contributors/editors.png")}
                        alt={this.state.magazine.title + "Editors"}
                      />
                    </span>
                  </div>
                  <div class="features-caption">
                    <h3>Editors</h3>
                    <p>
                      {this.state.magazine.contributors ? (
                        this.state.magazine.contributors.editors.map(
                          (editor, i) => (
                            <a
                              href={editor.profile}
                              rel="noreferrer noopener"
                              target="_blank"
                              key={i}
                            >
                              <span>{editor.name} | </span>
                            </a>
                          )
                        )
                      ) : (
                        <Skeleton count={2} />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Best Features End --> */}
        <Magazine />
        <SubFooter />
      </main>
    );
  }
}
