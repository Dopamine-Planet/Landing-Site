import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/breadcrumb.component";
import Sidebar from "../components/sidebar.component";
import firebase from "../config/database";
import Skeleton from "react-loading-skeleton";
import BlogArticle from "../components/blog-article.component";
import Author from "../components/author.component";

export default class BlogDetails extends Component {
  state = { blog: { tags: ["", ""], comments: ["", ""], author: {} } };

  componentDidMount() {
    var firestore = firebase.firestore();
    firestore
      .collection("blog")
      .where("slug", "==", this.props.match.params.slug)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs[0].data();
        data.id = querySnapshot.docs[0].id;
        this.setState({ blog: data });
      })
      .catch((error) => console.log(error));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onComment = (e) => {
    this.setState({ notif: "Loading..." });
    e.preventDefault();
    var firestore = firebase.firestore();
    firestore
      .collection("blog")
      .doc(this.state.blog.id)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          text: this.state.text,
          date: new Date().toGMTString(),
        }),
      })
      .then((result) => {
        if (typeof result == "string") {
          this.setState({ notif: result });
        } else window.location.reload();
      })
      .catch(() => this.setState({ notif: "Some error occured!" }));
  };

  render() {
    return (
      <main>
        <Helmet>
          {this.state.blog.title && (
            <title>{`${this.state.blog.title}​ | Blog - Dopamine`}</title>
          )}
          {this.state.blog.excerpt && (
            <meta name="description" content={this.state.blog.excerpt} />
          )}
          <script
            src="https://players.yumpu.com/modules/embed/yp_r_iframe.js"
            async
          ></script>
        </Helmet>
        {/* <!-- Slider Area Start--> */}
        <div className="services-area">
          <Breadcrumb />
          <div className="container">
            {/* <!-- Section-tittle --> */}
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div className="section-tittle text-center mb-80">
                  <h2>{this.state.blog.title || <Skeleton />}</h2>
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
                <BlogArticle blog={this.state.blog} />
                <div className="navigation-top">
                  <div className="d-sm-flex justify-content-between text-center">
                    <p className="like-info">
                      <span className="align-middle">
                        <i className="fa fa-bookmark"></i>
                      </span>{" "}
                      <a
                        href={`/blog?category=${this.state.blog.category}`}
                        className="text-dark"
                      >
                        {this.state.blog.category || <Skeleton />}
                      </a>
                    </p>
                    <div className="col-sm-4 text-center my-2 my-sm-0">
                      {/* <!-- <p className="comment-count"><span className="align-middle"><i className="fa fa-comment"></i></span> 06 Comments</p> --> */}
                    </div>
                    {this.state.blog.title && (
                      <ul className="social-icons">
                        <li>
                          <a
                            href={`https://api.whatsapp.com/send?phone=&text=${this.state.blog.title} - https://dopamineplanet.com/blog/${this.state.blog.slug}`}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i className="fab fa-whatsapp"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=https://dopamineplanet.com/blog/${this.state.blog.slug}`}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://dopamineplanet.com/blog/${this.state.blog.slug}&title=${this.state.blog.title}&summary=${this.state.blog.excerpt}&source=https://dopamineplanet.com`}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fdopamineplanet.com%2Fblog%2F${this.state.blog.slug}%2F&text=${this.state.blog.title}&tw_p=tweetbutton&url=https%3A%2F%2Fdopamineplanet.com%2Fblog%2F${this.state.blog.slug}%2F&via=dopamineplanet`}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`mailto:?subject=${this.state.blog.slug} | Dopamine Planet&body=${this.state.blog.excerpt}%20https%3A//dopamineplanet.com/blog/${this.state.blog.slug}`}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i className="fa fa-envelope"></i>
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="navigation-area">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                        <div className="thumb">
                          <a href="/blog/self-love">
                            <img
                              className="img-fluid dp-responsive-img"
                              src={require("../static/img/blog/single_blog_2.png")}
                              alt="Self Love: The Key to a Happy Life | Dopamine"
                            />
                          </a>
                        </div>
                        <div className="arrow">
                          <a href="/blog/self-love">
                            <span className="lnr text-white ti-arrow-left"></span>
                          </a>
                        </div>
                        <div className="detials">
                          <p>Prev Post</p>
                          <a href="/blog/self-love">
                            <h4>Self Love: The Key to a Happy Life​</h4>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                        <div className="detials">
                          <p>Next Post</p>
                          <a href="/blog/soshi">
                            <h4>Soshi's: Making life delicious</h4>
                          </a>
                        </div>
                        <div className="arrow">
                          <a href="/blog/soshi">
                            <span className="lnr text-white ti-arrow-right"></span>
                          </a>
                        </div>
                        <div className="thumb">
                          <a href="/blog/soshi">
                            <img
                              className="img-fluid dp-responsive-img"
                              src={require("../static/img/blog/single_blog_1.png")}
                              alt="Soshi's: Making life delicious | Dopamine"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Author author={this.state.blog.author} />
                <div className="comments-area">
                  <h4>
                    {this.state.blog.comments &&
                      this.state.blog.comments.length}{" "}
                    Comments
                  </h4>
                  {this.state.blog.comments &&
                    this.state.blog.comments.map((comment, i) => (
                      <div className="comment-list">
                        <div className="single-comment justify-content-between d-flex">
                          <div className="user justify-content-between d-flex">
                            <div className="thumb">
                              {comment.name ? (
                                <img
                                  src={require("../static/img/comment/comment_3.png")}
                                  alt={comment.name}
                                />
                              ) : (
                                <Skeleton />
                              )}
                            </div>
                            <div className="desc">
                              <p className="comment">
                                {comment.text || <Skeleton count={2} />}
                              </p>
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                  <h5>{comment.name || <Skeleton />}</h5>
                                  <p className="date">
                                    {comment.date || <Skeleton />}
                                  </p>
                                </div>
                                {/* <div className="reply-btn">
                                  <a className="btn-reply text-uppercase">
                                    reply
                                  </a>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="comment-form">
                  <h4>Leave a Reply</h4>
                  <div className="genric-btn success circle mb-3">
                    {this.state.notif}
                  </div>
                  <form
                    className="form-contact comment_form"
                    onSubmit={this.onComment}
                    id="commentForm"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control w-100"
                            name="text"
                            id="text"
                            cols="30"
                            rows="9"
                            onChange={this.handleChange}
                            placeholder="Write Your Comment"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="name"
                            id="name"
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="email"
                            id="email"
                            type="email"
                            onChange={this.handleChange}
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="phone"
                            id="phone"
                            type="number"
                            onChange={this.handleChange}
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="button button-contactForm btn_1 boxed-btn"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
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
    );
  }
}
