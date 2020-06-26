import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import Markdown from "markdown-to-jsx";

export default class BlogArticle extends Component {
  render() {
    return (
      <div className="single-post">
        <div className="feature-img">
          {/* <!-- <img className="img-fluid" src={require("../static/img/blog/single_blog_1.png")} alt=""> --> */}
          {this.props.blog.embed ? (
            <div
              className="embed-container"
              data-page-width="453"
              data-page-height="640"
              id="ypembedcontainer"
            >
              <iframe
                src={this.props.blog.embed}
                frameBorder="0"
                allowFullScreen="true"
                title="Magazine"
                allowtransparency="true"
              ></iframe>
            </div>
          ) : (
            <Skeleton height={300} />
          )}
        </div>
        <div className="blog_details">
          <h2>{this.props.blog.excerpt || <Skeleton count={2} />}</h2>
          <ul className="blog-info-link mt-3 mb-4">
            <li>
              <a href="#">
                <i className="fa fa-calendar"></i>{" "}
                {this.props.blog.date || <Skeleton />}
              </a>
            </li>
            <li>
              {this.props.blog.tags.map((tag, i) => (
                <a href={`/blog?tag=${tag}`} key={i}>
                  <i className="fa fa-tag"></i>
                  {tag + " " || <Skeleton />}
                </a>
              ))}
            </li>
          </ul>
          {this.props.blog.description ? (
            <Markdown
              options={{
                overrides: {
                  ul: { props: { className: "unordered-list" } },
                },
                forceBlock: true,
              }}
            >
              {this.props.blog.description}
            </Markdown>
          ) : (
            <Skeleton count={10} />
          )}
        </div>
      </div>
    );
  }
}
