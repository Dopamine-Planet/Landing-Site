import React, { Component } from "react";
import SubFooter from "../components/sub-footer.component";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/breadcrumb.component";
import Sidebar from "../components/sidebar.component";
import Markdown from "markdown-to-jsx";
import firebase from "../config/database";
import Skeleton from "react-loading-skeleton";

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
        <div class="services-area">
          <Breadcrumb />
          <div class="container">
            {/* <!-- Section-tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <div class="section-tittle text-center mb-80">
                  <h2>{this.state.blog.title || <Skeleton />}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Slider Area End--> */}
        {/* <!--================Blog Area =================--> */}
        <section class="blog_area single-post-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 posts-list">
                <div class="single-post">
                  <div class="feature-img">
                    {/* <!-- <img class="img-fluid" src={require("../static/img/blog/single_blog_1.png")} alt=""> --> */}
                    {this.state.blog.embed ? (
                      <div
                        class="embed-container"
                        data-page-width="453"
                        data-page-height="640"
                        id="ypembedcontainer"
                      >
                        <iframe
                          src={this.state.blog.embed}
                          frameborder="0"
                          allowfullscreen="true"
                          title="Magazine"
                          allowtransparency="true"
                        ></iframe>
                      </div>
                    ) : (
                      <Skeleton height={300} />
                    )}
                  </div>
                  <div class="blog_details">
                    <h2>{this.state.blog.excerpt || <Skeleton count={2} />}</h2>
                    <ul class="blog-info-link mt-3 mb-4">
                      <li>
                        <a href="#">
                          <i class="fa fa-calendar"></i>{" "}
                          {this.state.blog.date || <Skeleton />}
                        </a>
                      </li>
                      <li>
                        {this.state.blog.tags.map((tag, i) => (
                          <a href={`/blog?tag=${tag}`} key={i}>
                            <i class="fa fa-tag"></i>
                            {tag + " " || <Skeleton />}
                          </a>
                        ))}
                      </li>
                    </ul>
                    {this.state.blog.description ? (
                      <Markdown
                        options={{
                          overrides: {
                            ul: { props: { className: "unordered-list" } },
                          },
                          forceBlock: true,
                        }}
                      >
                        {this.state.blog.description}
                      </Markdown>
                    ) : (
                      <Skeleton count={10} />
                    )}
                  </div>
                </div>
                <div class="navigation-top">
                  <div class="d-sm-flex justify-content-between text-center">
                    <p class="like-info">
                      <span class="align-middle">
                        <i class="fa fa-bookmark"></i>
                      </span>{" "}
                      <a
                        href={`/blog?category=${this.state.blog.category}`}
                        class="text-dark"
                      >
                        {this.state.blog.category || <Skeleton />}
                      </a>
                    </p>
                    <div class="col-sm-4 text-center my-2 my-sm-0">
                      {/* <!-- <p class="comment-count"><span class="align-middle"><i class="fa fa-comment"></i></span> 06 Comments</p> --> */}
                    </div>
                    {this.state.blog.title && (
                      <ul class="social-icons">
                        <li>
                          <a
                            href={`https://api.whatsapp.com/send?phone=&text=${this.state.blog.title} - https://dopamineplanet.com/blog/${this.state.blog.slug}`}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i class="fab fa-whatsapp"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=https://dopamineplanet.com/blog/${this.state.blog.slug}`}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://dopamineplanet.com/blog/${this.state.blog.slug}&title=${this.state.blog.title}&summary=${this.state.blog.excerpt}&source=https://dopamineplanet.com`}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i class="fab fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fdopamineplanet.com%2Fblog%2F${this.state.blog.slug}%2F&text=${this.state.blog.title}&tw_p=tweetbutton&url=https%3A%2F%2Fdopamineplanet.com%2Fblog%2F${this.state.blog.slug}%2F&via=dopamineplanet`}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`mailto:?subject=${this.state.blog.slug} | Dopamine Planet&body=${this.state.blog.excerpt}%20https%3A//dopamineplanet.com/blog/${this.state.blog.slug}`}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <i class="fa fa-envelope"></i>
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div class="navigation-area">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                        <div class="thumb">
                          <a href="/blog/self-love">
                            <img
                              class="img-fluid dp-responsive-img"
                              src={require("../static/img/blog/single_blog_2.png")}
                              alt="Self Love: The Key to a Happy Life | Dopamine"
                            />
                          </a>
                        </div>
                        <div class="arrow">
                          <a href="/blog/self-love">
                            <span class="lnr text-white ti-arrow-left"></span>
                          </a>
                        </div>
                        <div class="detials">
                          <p>Prev Post</p>
                          <a href="/blog/self-love">
                            <h4>Self Love: The Key to a Happy Life​</h4>
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                        <div class="detials">
                          <p>Next Post</p>
                          <a href="/blog/soshi">
                            <h4>Soshi's: Making life delicious</h4>
                          </a>
                        </div>
                        <div class="arrow">
                          <a href="/blog/soshi">
                            <span class="lnr text-white ti-arrow-right"></span>
                          </a>
                        </div>
                        <div class="thumb">
                          <a href="/blog/soshi">
                            <img
                              class="img-fluid dp-responsive-img"
                              src={require("../static/img/blog/single_blog_1.png")}
                              alt="Soshi's: Making life delicious | Dopamine"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="blog-author">
                  <div class="media align-items-center">
                    {this.state.blog.author.image ? (
                      <img
                        src={require(`../static/img/${this.state.blog.author.image}`)}
                        alt={this.state.blog.author.name}
                      />
                    ) : (
                      <Skeleton circle={true} height={70} width={70} />
                    )}
                    <div class="media-body">
                      <a href={this.state.blog.author.profile}>
                        <h4>{this.state.blog.author.name || <Skeleton />}</h4>
                      </a>
                      <p>
                        {this.state.blog.author.bio || <Skeleton count={3} />}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="comments-area">
                  <h4>
                    {this.state.blog.comments &&
                      this.state.blog.comments.length}{" "}
                    Comments
                  </h4>
                  {this.state.blog.comments &&
                    this.state.blog.comments.map((comment, i) => (
                      <div class="comment-list">
                        <div class="single-comment justify-content-between d-flex">
                          <div class="user justify-content-between d-flex">
                            <div class="thumb">
                              {comment.name ? (
                                <img
                                  src={require("../static/img/comment/comment_3.png")}
                                  alt={comment.name}
                                />
                              ) : (
                                <Skeleton />
                              )}
                            </div>
                            <div class="desc">
                              <p class="comment">
                                {comment.text || <Skeleton count={2} />}
                              </p>
                              <div class="d-flex justify-content-between">
                                <div class="d-flex align-items-center">
                                  <h5>
                                    <a href="#">
                                      {comment.name || <Skeleton />}
                                    </a>
                                  </h5>
                                  <p class="date">
                                    {comment.date || <Skeleton />}
                                  </p>
                                </div>
                                <div class="reply-btn">
                                  <a class="btn-reply text-uppercase">reply</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div class="comment-form">
                  <h4>Leave a Reply</h4>
                  <div class="genric-btn success circle mb-3">
                    {this.state.notif}
                  </div>
                  <form
                    class="form-contact comment_form"
                    onSubmit={this.onComment}
                    id="commentForm"
                  >
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <textarea
                            class="form-control w-100"
                            name="text"
                            id="text"
                            cols="30"
                            rows="9"
                            onChange={this.handleChange}
                            placeholder="Write Your Comment"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            name="name"
                            id="name"
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            name="email"
                            id="email"
                            type="email"
                            onChange={this.handleChange}
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <input
                            class="form-control"
                            name="phone"
                            id="phone"
                            type="number"
                            onChange={this.handleChange}
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="button button-contactForm btn_1 boxed-btn"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="blog_right_sidebar">
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
