import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/breadcrumb.component";
import Sidebar from "../components/sidebar.component";
import firebase from "../config/database";

export default class Blog extends Component {
  state = { blog: undefined };

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const category = params.get("category");
    const tag = params.get("tag");
    var blog = firebase.firestore().collection("blog");
    if (category) blog = blog.where("category", "==", category);
    if (tag) blog = blog.where("tags", "array-contains", tag);
    blog
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ blog: data }); // array of cities objects
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <main>
        <Helmet>
          <title>Our Blog Area | Dopamine - Let Positivity Engulf You</title>
          <meta
            name="description"
            content="Here, you'll find posts on mental health to help you live healthier and feel happier."
          />
        </Helmet>
        {/* <!-- Best Pricing Start --> */}
        <section class="services-area">
          <Breadcrumb />
          <div class="container">
            {/* <!-- Section-tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <div class="section-tittle text-center mb-80">
                  <p>
                    Here, you'll find posts on mental health to help you live
                    healthier and feel happier.
                  </p>
                  <h2>Our Blog Area​</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Best Pricing End --> */}

        {/* <!--================Blog Area =================--> */}
        <section class="blog_area section-paddingr">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mb-5 mb-lg-0">
                <div class="blog_left_sidebar">
                  {this.state.blog &&
                    this.state.blog.map((article, i) => (
                      <article class="blog_item" key={i}>
                        <div class="blog_item_img">
                          <img
                            class="card-img rounded-0"
                            src={require(`../static/img/${article.featuredImage}`)}
                            alt={article.title}
                          />
                          <a
                            href={`/blog?category=${article.category}`}
                            class="blog_item_date"
                          >
                            <h3>{article.category}</h3>
                            <p></p>
                          </a>
                        </div>

                        <div class="blog_details">
                          <a
                            class="d-inline-block"
                            href={`/blog/${article.slug}`}
                          >
                            <h2>{article.title}</h2>
                          </a>
                          <p>{article.excerpt}</p>
                          <ul class="blog-info-link">
                            <li>
                              {/* <a href="#"> */}
                              <i class="fa fa-calendar"></i> {article.date}
                              {/* </a> */}
                            </li>
                            <li>
                              {article.tags.map((tag, i) => (
                                <a href={`/blog?tag=${tag}`} key={i}>
                                  <i class="fa fa-tag"></i>
                                  {tag + " "}
                                </a>
                              ))}
                            </li>
                          </ul>
                        </div>
                      </article>
                    ))}
                  {/* <!-- <nav class="blog-pagination justify-content-center d-flex">
                    <ul class="pagination">
                        <li class="page-item">
                            <a href="#" class="page-link" aria-label="Previous">
                                <i class="ti-angle-left"></i>
                            </a>
                        </li>
                        <li class="page-item">
                            <a href="#" class="page-link">1</a>
                        </li>
                        <li class="page-item active">
                            <a href="#" class="page-link">2</a>
                        </li>
                        <li class="page-item">
                            <a href="#" class="page-link" aria-label="Next">
                                <i class="ti-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                  </nav> --> */}
                </div>
              </div>
              <div class="col-lg-4">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
        {/* <!--================Blog Area =================--> */}
        <SubFooter />
      </main>
    );
  }
}
