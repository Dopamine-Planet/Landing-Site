import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

export default class ArticleCard extends Component {
  render() {
    return (
      <article class="blog_item">
        <div class="blog_item_img">
          {this.props.article.featuredImage ? (
            <a href={`/blog/${this.props.article.slug}`}>
              <img
                class="card-img rounded-0"
                src={require(`../static/img/${this.props.article.featuredImage}`)}
                alt={this.props.article.title}
              />
            </a>
          ) : (
            <Skeleton height={300} />
          )}
          <a
            href={`/blog?category=${this.props.article.category}`}
            class="blog_item_date"
          >
            <h3>{this.props.article.category || <Skeleton />}</h3>
            <p></p>
          </a>
        </div>
        <div class="blog_details">
          <a class="d-inline-block" href={`/blog/${this.props.article.slug}`}>
            <h2>{this.props.article.title || <Skeleton />}</h2>
          </a>
          <p>{this.props.article.excerpt || <Skeleton count={2} />}</p>
          <ul class="blog-info-link">
            <li>
              <i class="fa fa-calendar"></i>{" "}
              {this.props.article.date || <Skeleton />}
            </li>
            <li>
              {this.props.article.tags.map((tag, i) => (
                <a href={`/blog?tag=${tag}`} key={i}>
                  <i class="fa fa-tag"></i>
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
