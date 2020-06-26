import React, { Component } from "react";
import firebase from "../config/database";
import Breadcrumb from "../components/breadcrumb.component";
import ArticleCard from "../components/article-card.component";
import BlogArticle from "../components/blog-article.component";
import Author from "../components/author.component";

export default class AdminBlog extends Component {
  state = {
    id: null,
    notif: undefined,
    blog: { author: {}, tags: [] },
    fileProgress: 0,
    authorProgress: 0,
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
          this.setState({ blog: data, id: querySnapshot.docs[0].id });
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

  handleFile = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = firebase
        .storage()
        .ref(`blog/featured-image/${image.name}`)
        .put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progrss function ....
          const fileProgress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ fileProgress });
        },
        (error) => {
          // error function ....
          console.log(error);
        },
        () => {
          // complete function ....
          firebase
            .storage()
            .ref("blog/featured-image")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              this.setState({
                blog: { ...this.state.blog, featuredImage: url },
              });
            });
        }
      );
    }
  };

  handleAuthorImage = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = firebase
        .storage()
        .ref(`blog/author-image/${image.name}`)
        .put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progrss function ....
          const authorProgress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ authorProgress });
        },
        (error) => {
          // error function ....
          console.log(error);
        },
        () => {
          // complete function ....
          firebase
            .storage()
            .ref("blog/author-image")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              this.setState({
                blog: {
                  ...this.state.blog,
                  author: { ...this.state.blog.author, image: url },
                },
              });
            });
        }
      );
    }
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
            notif: `Blog saved successfully`,
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
        <section className="services-area">
          <Breadcrumb />
          <div className="container">
            {/* <!-- Section-tittle --> */}
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div className="section-tittle text-center mb-80">
                  <h2>
                    Lets Work on your Blog
                    <p>Enter all the details and save. It's that easy.</p>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Best Pricing End --> */}

        {/* <!--================Blog Area =================--> */}
        <section className="blog_area section-paddingr">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                  <form onSubmit={this.saveBlog}>
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i className="fa fa-font" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="title"
                        value={this.state.blog.title}
                        onChange={this.handleChange}
                        placeholder="Title"
                        required
                        className="single-input"
                      />
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="slug"
                        value={this.state.blog.slug}
                        onChange={this.handleChange}
                        placeholder="Slug"
                        required
                        className="single-input"
                      />
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i
                          className="fa fa-camera-retro"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <input
                        type="url"
                        name="featuredImage"
                        value={this.state.blog.featuredImage}
                        onChange={this.handleChange}
                        placeholder="Enter Feature Image URL or Upload File below"
                        className="single-input"
                      />
                      <input type="file" onChange={this.handleFile} />
                      {this.state.fileProgress > 0 && (
                        <progress value={this.state.fileProgress} max="100" />
                      )}
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i className="fa fa-spinner" aria-hidden="true"></i>
                      </div>
                      <input
                        type="url"
                        name="embed"
                        value={this.state.blog.embed}
                        onChange={this.handleChange}
                        placeholder="Embed"
                        className="single-input"
                      />
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i className="fa fa-paragraph" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        value={this.state.blog.excerpt}
                        onChange={this.handleChange}
                        name="excerpt"
                        placeholder="Excerpt"
                        required
                        className="single-input"
                      />
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        value={this.state.blog.date}
                        onChange={this.handleChange}
                        name="date"
                        placeholder="Date"
                        required
                        className="single-input"
                      />
                    </div>
                    <div className="mt-10">
                      <textarea
                        className="single-textarea"
                        placeholder="Description"
                        name="description"
                        value={this.state.blog.description}
                        onChange={this.handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i className="fa fa-bookmark" aria-hidden="true"></i>
                      </div>
                      <div className="form-select" id="default-select">
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
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i className="fa fa-id-badge" aria-hidden="true"></i>
                      </div>
                      <input
                        type="url"
                        name="image"
                        placeholder="Enter Author Image URL or Upload File below"
                        value={this.state.blog.author.image}
                        onChange={this.authorChange}
                        required
                        className="single-input"
                      />
                      <input type="file" onChange={this.handleAuthorImage} />
                      {this.state.authorProgress > 0 && (
                        <progress value={this.state.authorProgress} max="100" />
                      )}
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Author Name"
                        required
                        value={this.state.blog.author.name}
                        onChange={this.authorChange}
                        className="single-input"
                      />
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </div>
                      <input
                        type="url"
                        name="profile"
                        placeholder="Author Profile"
                        value={this.state.blog.author.profile}
                        onChange={this.authorChange}
                        required
                        className="single-input"
                      />
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i className="fa fa-id-card" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="bio"
                        value={this.state.blog.author.bio}
                        onChange={this.authorChange}
                        placeholder="Author Bio"
                        required
                        className="single-input"
                      />
                    </div>
                    <div className="input-group-icon mt-10">
                      <div className="icon">
                        <i className="fa fa-tags" aria-hidden="true"></i>
                      </div>
                      <input
                        type="text"
                        name="tags"
                        id="tags"
                        placeholder="Enter the tags for seach capabilities"
                        className="single-input"
                      />
                    </div>
                    <div className="button-group-area">
                      <button
                        type="button"
                        className="genric-btn success circle"
                        onClick={this.addTag}
                      >
                        Add Tag
                      </button>
                      {this.state.blog.tags.map((tag, i) => (
                        <button
                          type="button"
                          onClick={() => this.removeTag(tag)}
                          className="genric-btn success-border circle arrow"
                          key={i}
                        >
                          {tag}
                          <span className="ti-close"></span>
                        </button>
                      ))}
                    </div>
                    <div className="genric-btn success circle mt-3">
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
              <div className="col-lg-6">
                <section className="blog_area single-post-area">
                  <ArticleCard article={this.state.blog} />
                  <BlogArticle blog={this.state.blog} />
                  <Author author={this.state.blog.author} />
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
