import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer-main">
          <div class="footer-area footer-padding">
            <div class="container">
              <div class="row  justify-content-between">
                <div class="col-lg-4 col-md-8 col-sm-8">
                  <div class="single-footer-caption mb-30">
                    {/* <!-- logo --> */}
                    <div class="footer-logo">
                      <a href="index.html">
                        <img
                          src={require("../static/img/logo/logo2_footer.png")}
                          alt="Dopamine Positivity Logo"
                        />
                      </a>
                    </div>
                    <div class="footer-tittle">
                      <div class="footer-pera">
                        <p class="info1">
                          Dopamine is an ongoing investigation on positivity, a
                          collection of some candid first-hand experiences. We,
                          a bunch of creative enthusiasts, are on a quest to
                          spread optimism through quality content and making it
                          the new norm. Together we’re learning to be ourselves,
                          changing mindsets and doing more of what makes us feel
                          good.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-8">
                  <div class="single-footer-caption mb-50">
                    <div class="footer-tittle">
                      <h4>Newsletter</h4>
                      <div class="footer-pera footer-pera2">
                        <p>Stay updated with our positive shenanigans!</p>
                      </div>
                      {/* <!-- Form --> */}
                      <div class="footer-form">
                        <div id="mc_embed_signup">
                          <form
                            target="_blank"
                            action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                            method="get"
                            class="subscribe_form relative mail_part"
                            novalidate="true"
                          >
                            <label for="newsletter-form-email">
                              <input
                                type="email"
                                name="EMAIL"
                                id="newsletter-form-email"
                                placeholder=" Email Address "
                                class="placeholder hide-on-focus"
                                onfocus="this.placeholder = ''"
                                onblur="this.placeholder = ' Email Address '"
                              />
                            </label>
                            <div class="form-icon">
                              <button
                                type="submit"
                                name="submit"
                                id="newsletter-submit"
                                class="email_icon newsletter-submit button-contactForm"
                              >
                                <img
                                  src={require("../static/img/shape/form_icon.png")}
                                  alt="Send Email Image"
                                />
                              </button>
                            </div>
                            <div class="mt-10 info"></div>
                          </form>
                        </div>
                      </div>
                      <ul class="social-icons footer-social">
                        <li>
                          <a
                            href="https://www.instagram.com/dopamineplanet/"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/dopamineplanet/"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/dopamineplanet/"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i class="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/dopamineplanet"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-7">
                  <div class="single-footer-caption mb-50">
                    <div class="footer-tittle">
                      <h4>Contact Us</h4>
                      <div class="media contact-info">
                        <span class="contact-info__icon">
                          <i class="ti-home"></i>
                        </span>
                        <div class="media-body">
                          <h3>
                            <a
                              href="https://www.google.com/maps/place/The+LNM+Institute+of+Information+Technology/@26.9362789,75.9215104,16.75z"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              LNMIIT, Jaipur
                            </a>
                          </h3>
                          <p>RJ, India 302031</p>
                        </div>
                      </div>
                      <div class="media contact-info">
                        <span class="contact-info__icon">
                          <i class="ti-tablet"></i>
                        </span>
                        <div class="media-body">
                          <h3>
                            <a
                              href="tel:+917073637246"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              +91 707 363 7246
                            </a>
                          </h3>
                          <p>Feel free to call us</p>
                        </div>
                      </div>
                      <div class="media contact-info">
                        <span class="contact-info__icon">
                          <i class="ti-email"></i>
                        </span>
                        <div class="media-body">
                          <h3>
                            <a
                              href="mailto:contact@dopamineplanet.com"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              contact@dopamineplanet.com
                            </a>
                          </h3>
                          <p>Send us your query anytime!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Copy-Right --> */}
              <div class="row align-items-center">
                <div class="col-xl-12 ">
                  <div class="footer-copy-right">
                    <p>
                      &copy;{" "}
                      <script>document.write(new Date().getFullYear());</script>{" "}
                      Dopamine Planet. All rights reserved | This website is
                      made with <i class="ti-heart" aria-hidden="true"></i> by{" "}
                      <a
                        href="https://colorlib.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Colorlib
                      </a>{" "}
                      | <a href="/legal/terms">Terms</a> |{" "}
                      <a href="/legal/privacy">Privacy</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
