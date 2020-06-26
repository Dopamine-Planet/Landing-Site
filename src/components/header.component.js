import React, { Component } from "react";

export default class Breadcrumb extends Component {
  render() {
    return (
      <header>
        <div className="header-area header-transparrent ">
          <div className="main-header header-sticky">
            <div className="container">
              <div className="row align-items-center">
                {/* <!-- Logo --> */}
                <div className="col-xl-2 col-lg-2 col-md-2">
                  <div className="logo">
                    <a href="/">
                      <img
                        src={require("../static/img/logo/logo.png")}
                        alt="Dopamine Positivity Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10">
                  {/* <!-- Main-menu --> */}
                  <div className="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/#magazines">
                            Magazines <i className="fa fa-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="/magazines/issue-5">Issue 5</a>
                            </li>
                            <li>
                              <a href="/magazines/issue-4">Issue 4</a>
                            </li>
                            <li>
                              <a href="/magazines/issue-3">Issue 3</a>
                            </li>
                            <li>
                              <a href="/magazines/issue-2">Issue 2</a>
                            </li>
                            <li>
                              <a href="/magazines/issue-1">Issue 1</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/events">Events</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/collaborate">Collaborate</a>
                        </li>
                        <li>
                          <a href="/blog">Blog</a>
                        </li>
                        <li>
                          <button
                            className="genric-btn success circle mb-3"
                            id="contribute"
                            onClick={() =>
                              window.open(
                                "https://docs.google.com/forms/d/e/1FAIpQLScaVzYFnT8nVicqn8HZCr0Iw0y6SrMQHrMz4xx4o1loNFGVew/viewform",
                                "_blank"
                              )
                            }
                          >
                            Contribute
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* <!-- Mobile Menu --> */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
