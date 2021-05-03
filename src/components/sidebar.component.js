import React, { Component } from "react";
import firebase from "../config/database";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Skeleton from "react-loading-skeleton";

export default class Sidebar extends Component {
  state = { blog: ["", "", "", ""], categories: [], email: undefined };

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
    firestore
      .collection("categories")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        this.setState({ categories: data }); // array of categories
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="blog_right_sidebar">
        {/* <aside className="single_sidebar_widget search_widget">
          <form action="#">
            <div className="form-group">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Keyword"
                />
                <div className="input-group-append">
                  <button className="btns" type="button">
                    <i className="ti-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <button
              className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
              type="submit"
            >
              Search
            </button>
          </form>
        </aside> */}

        <aside className="single_sidebar_widget post_category_widget">
          <h4 className="widget_title">Category</h4>
          <ul className="list cat-list">
            {this.state.categories.map((category, i) => (
              <li key={i}>
                <a href={"/blog?category=" + category.key} className="d-flex">
                  <p>{category.value}</p>
                  <p></p>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {this.state.blog && (
          <aside className="single_sidebar_widget popular_post_widget">
            <h3 className="widget_title">Recent Posts</h3>
            {this.state.blog.map((article, i) => (
              <div className="media post_item" key={i}>
                {article.featuredImage ? (
                  <img src={article.featuredImage} alt="post" />
                ) : (
                  <Skeleton height={50} width={70} />
                )}
                <div className="media-body">
                  <a href={`/blog/${article.slug}`}>
                    <h3>{article.title || <Skeleton />}</h3>
                  </a>
                  <p>{article.date || <Skeleton />}</p>
                </div>
              </div>
            ))}
          </aside>
        )}
        <aside className="single_sidebar_widget tag_cloud_widget">
          <h4 className="widget_title">Tag Clouds</h4>
          <ul className="list">
            {[
              "positivity",
              "podcast",
              "unconventional",
              "cheerful",
              "optimistic",
            ].map((tag, i) => (
              <li key={i}>
                <a href={`/blog?tag=${tag}`}>{tag}</a>
              </li>
            ))}
          </ul>
        </aside>

        <aside className="single_sidebar_widget newsletter_widget">
          <h4 className="widget_title">Newsletter</h4>
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
            //       className="genric-btn success circle mb-3"
            //       dangerouslySetInnerHTML={{ __html: message }}
            //     ></div>
            //     <div className="form-group">
            //       <input
            //         type="email"
            //         name="email"
            //         className="form-control"
            //         placeholder="Enter email"
            //         onChange={this.handleChange}
            //         required
            //       />
            //     </div>
            //     <button
            //       className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
            //       type="submit"
            //     >
            //       Subscribe
            //     </button>
            //   </form>
            // )
            // }
          />
        </aside>

        {/* <aside className="single_sidebar_widget instagram_feeds">
          <h4 className="widget_title">Instagram Feeds</h4>
          <ul className="instagram_row flex-wrap">
            <li>
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../static/img/post/post_5.png")}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../static/img/post/post_6.png")}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../static/img/post/post_7.png")}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../static/img/post/post_8.png")}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../static/img/post/post_9.png")}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="img-fluid"
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
