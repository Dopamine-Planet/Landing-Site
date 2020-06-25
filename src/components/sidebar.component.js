import React, { Component } from "react";
import firebase from "../config/database";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Skeleton from "react-loading-skeleton";

export default class Sidebar extends Component {
  state = { blog: ["", "", "", ""], email: undefined };

  componentDidMount() {
    var firestore = firebase.firestore();
    firestore
      .collection("blog")
      .limit(4)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ blog: data }); // array of cities objects
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div class="blog_right_sidebar">
        {/* <aside class="single_sidebar_widget search_widget">
          <form action="#">
            <div class="form-group">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Keyword"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Search Keyword'"
                />
                <div class="input-group-append">
                  <button class="btns" type="button">
                    <i class="ti-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <button
              class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
              type="submit"
            >
              Search
            </button>
          </form>
        </aside> */}

        <aside class="single_sidebar_widget post_category_widget">
          <h4 class="widget_title">Category</h4>
          <ul class="list cat-list">
            <li>
              <a href="/blog?category=Issue-5" class="d-flex">
                <p>Magazine Issue 5 </p>
                <p> (1)</p>
              </a>
            </li>
            <li>
              <a href="/blog?category=Issue-3" class="d-flex">
                <p>Magazine Issue 3 </p>
                <p> (1)</p>
              </a>
            </li>
          </ul>
        </aside>

        {this.state.blog && (
          <aside class="single_sidebar_widget popular_post_widget">
            <h3 class="widget_title">Recent Posts</h3>
            {this.state.blog.map((article, i) => (
              <div class="media post_item" key={i}>
                {article.featuredImage ? (
                  <img src={article.featuredImage} alt="post" />
                ) : (
                  <Skeleton height={50} width={70} />
                )}
                <div class="media-body">
                  <a href={`/blog/${article.slug}`}>
                    <h3>{article.title || <Skeleton />}</h3>
                  </a>
                  <p>{article.date || <Skeleton />}</p>
                </div>
              </div>
            ))}
          </aside>
        )}
        <aside class="single_sidebar_widget tag_cloud_widget">
          <h4 class="widget_title">Tag Clouds</h4>
          <ul class="list">
            {["positivity", "cheerful", "joy", "kind", "optimistic"].map(
              (tag, i) => (
                <li key={i}>
                  <a href={`/blog?tag=${tag}`}>{tag}</a>
                </li>
              )
            )}
          </ul>
        </aside>

        <aside class="single_sidebar_widget newsletter_widget">
          <h4 class="widget_title">Newsletter</h4>
          <MailchimpSubscribe
            url={process.env.REACT_APP_MAILCHIMP_URLS}
            // render={({ subscribe, status, message }) => (
            //   <form
            //     onSubmit={(formData) => {
            //       formData.preventDefault();
            //       subscribe(formData);
            //     }}
            //   >
            //     <div
            //       class="genric-btn success circle mb-3"
            //       dangerouslySetInnerHTML={{ __html: message }}
            //     ></div>
            //     <div class="form-group">
            //       <input
            //         type="email"
            //         name="email"
            //         class="form-control"
            //         onfocus="this.placeholder = ''"
            //         onblur="this.placeholder = 'Enter email'"
            //         placeholder="Enter email"
            //         onChange={this.handleChange}
            //         required
            //       />
            //     </div>
            //     <button
            //       class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
            //       type="submit"
            //     >
            //       Subscribe
            //     </button>
            //   </form>
            // )
            // }
          />
        </aside>

        {/* <aside class="single_sidebar_widget instagram_feeds">
          <h4 class="widget_title">Instagram Feeds</h4>
          <ul class="instagram_row flex-wrap">
            <li>
              <a href="#">
                <img
                  class="img-fluid"
                  src={require("../static/img/post/post_5.png")}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  class="img-fluid"
                  src={require("../static/img/post/post_6.png")}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  class="img-fluid"
                  src={require("../static/img/post/post_7.png")}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  class="img-fluid"
                  src={require("../static/img/post/post_8.png")}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  class="img-fluid"
                  src={require("../static/img/post/post_9.png")}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  class="img-fluid"
                  src={require("../static/img/post/post_10.png")}
                  alt=""
                />
              </a>
            </li>
          </ul>
        </aside> */}
      </div>
    );
  }
}
