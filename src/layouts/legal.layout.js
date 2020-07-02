import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import Breadcrumb from "../components/breadcrumb.component";
import Sidebar from "../components/sidebar.component";
import Markdown from "markdown-to-jsx";
import firebase from "../config/database";
import { Helmet } from "react-helmet";

export default class Legal extends Component {
  state = { legal: undefined };

  componentDidMount() {
    var firestore = firebase.firestore();
    firestore
      .collection("legals")
      .where("slug", "==", this.props.match.params.slug)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs[0].data();
        this.setState({ legal: data });
      });
  }

  render() {
    return (
      <>
        {this.state.legal && (
          <main>
            <Helmet>
              <title>{`${this.state.legal.title} | Dopamine - Let Positivity Engulf You`}</title>
            </Helmet>
            {/* <!-- Slider Area Start--> */}
            <div className="services-area">
              <Breadcrumb />
              <div className="container">
                {/* <!-- Section-tittle --> */}
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <div className="section-tittle text-center mb-80">
                      <h2>{this.state.legal.title}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slider Area End--> */}
            {/* <!--================Blog Area =================--> */}
            <section className="blog_area single-post-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 posts-list">
                    <div className="single-post">
                      <div className="blog_details">
                        {this.state.legal.description && (
                          <Markdown
                            options={{
                              overrides: {
                                ul: { props: { className: "unordered-list" } },
                              },
                              forceBlock: true,
                            }}
                          >
                            {this.state.legal.description}
                          </Markdown>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="blog_right_sidebar">
                      <Sidebar />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--================ Blog Area end =================--> */}
            <SubFooter />
          </main>
        )}
      </>
    );
  }
}
