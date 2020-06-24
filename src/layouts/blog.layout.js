import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/breadcrumb.component";
import Sidebar from "../components/sidebar.component";
import firebase from "../config/database";
import ArticleCard from "../components/article-card.component";

export default class Blog extends Component {
  state = { blog: [{ tags: ["", ""] }, { tags: ["", ""] }] };

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
                  <h2>
                    Our Blog Area​
                    <p>
                      Here, you'll find posts on mental health to help you live
                      healthier and feel happier.
                    </p>
                  </h2>
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
                  {this.state.blog.map((article, i) => (
                    <ArticleCard article={article} key={i} />
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
