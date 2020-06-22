import React, { Component } from "react";
import Breadcrumb from "../components/breadcrumb.component";
import firebase from "../config/database";
import Markdown from "markdown-to-jsx";
import Skeleton from "react-loading-skeleton";

export default class AdminBlog extends Component {
  state = {
    id: null,
    notif: undefined,
    blog: { author: {}, tags: [] },
  };

  componentDidMount() {
    if (this.props.match.params.slug) {
      var firestore = firebase.firestore();
      firestore
        .collection("blog")
        .where("slug", "==", this.props.match.params.slug)
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs[0].data();
          data.id = querySnapshot.docs[0].id;
          this.setState({ blog: data });
        });
    }
  }

  addTag = (e) => {
    e.preventDefault();
    var field = document.getElementById("tags");
    if (field.value && this.state.blog.tags.indexOf(field.value) === -1)
      this.setState({
        blog: {
          ...this.state.blog,
          tags: [...this.state.blog.tags, field.value],
        },
      });
    field.value = "";
  };

  removeTag = (tag) => {
    var na = this.state.blog.tags;
    na.splice(na.indexOf(tag), 1);
    this.setState({
      blog: {
        ...this.state.blog,
        tags: na,
      },
    });
  };

  handleChange = (e) => {
    this.setState({
      blog: { ...this.state.blog, [e.target.name]: e.target.value },
    });
  };

  authorChange = (e) => {
    this.setState({
      blog: {
        ...this.state.blog,
        author: { ...this.state.blog.author, [e.target.name]: e.target.value },
      },
    });
  };

  saveBlog = (e) => {
    e.preventDefault();
    this.setState({ notif: "Loading..." });
    var firestore = firebase.firestore();
    if (this.props.match.params.slug)
      firestore
        .collection("blog")
        .doc(this.state.id)
        .set(this.state.blog, { merge: true })
        .then((response) =>
          this.setState({
            notif: `Blog created successfully with id: ${response.id}`,
          })
        )
        .catch((error) => console.log(error));
    else
      firestore
        .collection("blog")
        .add(this.state.blog)
        .then((response) =>
          this.setState({
            notif: `Blog created successfully with id: ${response.id}`,
          })
        )
        .catch((error) => console.log(error));
  };

  render() {
    return (
      <main>
        {/* <!-- Best Pricing Start --> */}
        <section class="services-area">
          <Breadcrumb />
          <div class="container">
            {/* <!-- Section-tittle --> */}
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <div class="section-tittle text-center mb-80">
                  <p>Enter all the details and submit.</p>
                  <h2>Create a New Blog</h2>
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
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="blog_left_sidebar">
                  <form onSubmit={this.saveBlog}>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-font" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="title"
                        value={this.state.blog.title}
                        placeholder="Title"
                        required
                        class="single-input"
                      />
                    </div>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-link" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="slug"
                        value={this.state.blog.slug}
                        onChange={this.handleChange}
                        placeholder="Slug"
                        required
                        class="single-input"
                      />
                    </div>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-camera-retro" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="featuredImage"
                        value={this.state.blog.featuredImage}
                        onChange={this.handleChange}
                        placeholder="Featured Image"
                        class="single-input"
                      />
                    </div>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-spinner" aria-hidden="true"></i>
                      </div>
                      <input
                        type="url"
                        name="embed"
                        value={this.state.blog.embed}
                        onChange={this.handleChange}
                        placeholder="Embed"
                        class="single-input"
                      />
                    </div>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-paragraph" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        value={this.state.blog.excerpt}
                        onChange={this.handleChange}
                        name="excerpt"
                        placeholder="Excerpt"
                        required
                        class="single-input"
                      />
                    </div>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        value={this.state.blog.date}
                        onChange={this.handleChange}
                        name="date"
                        placeholder="Date"
                        required
                        class="single-input"
                      />
                    </div>
                    <div class="mt-10">
                      <textarea
                        class="single-textarea"
                        placeholder="Description"
                        name="description"
                        value={this.state.blog.description}
                        onChange={this.handleChange}
                        required
                      ></textarea>
                    </div>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-bookmark" aria-hidden="true"></i>
                      </div>
                      <div class="form-select" id="default-select">
                        <select
                          value={this.state.blog.category}
                          className="nice-select"
                          name="category"
                          onChange={this.handleChange}
                          required
                        >
                          <option value={undefined}>Select Category</option>
                          <option value="Issue-3">Issue 3</option>
                          <option value="Issue-5">Issue 5</option>
                          <option value="Recommendations">
                            Recommendations
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-id-badge" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="image"
                        placeholder="Author Image"
                        value={this.state.blog.author.image}
                        onChange={this.authorChange}
                        required
                        class="single-input"
                      />
                    </div>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Author Name"
                        required
                        value={this.state.blog.author.name}
                        onChange={this.authorChange}
                        class="single-input"
                      />
                    </div>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                      <input
                        type="url"
                        name="profile"
                        placeholder="Author Profile"
                        value={this.state.blog.author.profile}
                        onChange={this.authorChange}
                        required
                        class="single-input"
                      />
                    </div>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-id-card" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="bio"
                        value={this.state.blog.author.bio}
                        onChange={this.authorChange}
                        placeholder="Author Bio"
                        required
                        class="single-input"
                      />
                    </div>
                    <div class="input-group-icon mt-10">
                      <div class="icon">
                        <i class="fa fa-tags" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="tags"
                        id="tags"
                        placeholder="Enter the tags for seach capabilities"
                        className="single-input"
                      />
                    </div>
                    <div class="button-group-area mt-40">
                      <button
                        type="button"
                        className="genric-btn success circle"
                        onClick={this.addTag}
                      >
                        Add Tag
                      </button>
                      {this.state.blog.tags.map((tag, i) => (
                        <a
                          class="genric-btn success circle"
                          onClick={() => this.removeTag(tag)}
                          key={i}
                        >
                          {tag}
                          <i className="ti-close"></i>
                        </a>
                      ))}
                    </div>
                    <div class="genric-btn success circle mt-3">
                      {this.state.notif}
                    </div>
                    <div className="form-group mt-3">
                      <button
                        type="submit"
                        className="button button-contactForm btn_1 boxed-btn"
                      >
                        Save Blog
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6">
                <section class="blog_area single-post-area">
                  <div class="container">
                    <div class="posts-list">
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
                          <h2>
                            {this.state.blog.excerpt || <Skeleton count={2} />}
                          </h2>
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
                                  ul: {
                                    props: { className: "unordered-list" },
                                  },
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
                            {this.state.blog.category || <Skeleton />}
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
                                    class="img-fluid"
                                    src={require("../static/img/post/preview.png")}
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
                                    class="img-fluid"
                                    src={require("../static/img/post/next.png")}
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
                            <a href={this.state.blog.author.profile || ""}>
                              <h4>
                                {this.state.blog.author.name || <Skeleton />}
                              </h4>
                            </a>
                            <p>
                              {this.state.blog.author.bio || (
                                <Skeleton count={3} />
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/* <!--================Blog Area =================--> */}
      </main>
    );
  }
}
