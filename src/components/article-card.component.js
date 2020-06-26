import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

export default class ArticleCard extends Component {
  render() {
    return (
      <article className="blog_item">
        <div className="blog_item_img">
          {this.props.article.featuredImage ? (
            <a href={`/blog/${this.props.article.slug}`}>
              <img
                className="card-img rounded-0"
                src={this.props.article.featuredImage}
                alt={this.props.article.title}
              />
            </a>
          ) : (
            <Skeleton height={300} />
          )}
          <a
            href={`/blog?category=${this.props.article.category}`}
            className="blog_item_date"
          >
            <h3>{this.props.article.category || <Skeleton />}</h3>
            <p></p>
          </a>
        </div>
        <div className="blog_details">
          <a
            className="d-inline-block"
            href={`/blog/${this.props.article.slug}`}
          >
            <h2>{this.props.article.title || <Skeleton />}</h2>
          </a>
          <p>{this.props.article.excerpt || <Skeleton count={2} />}</p>
          <ul className="blog-info-link">
            <li>
              <i className="fa fa-calendar"></i>{" "}
              {this.props.article.date || <Skeleton />}
            </li>
            <li>
              {this.props.article.tags.map((tag, i) => (
                <a href={`/blog?tag=${tag}`} key={i}>
                  <i className="fa fa-tag"></i>
                  {tag + " " || <Skeleton count={2} />}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </article>
    );
  }
}
