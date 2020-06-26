import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

export default class Author extends Component {
  render() {
    return (
      <div className="blog-author">
        <div className="media align-items-center">
          {this.props.author.image ? (
            <img src={this.props.author.image} alt={this.props.author.name} />
          ) : (
            <Skeleton circle={true} height={70} width={70} />
          )}
          <div className="media-body">
            <a href={this.props.author.profile}>
              <h4>{this.props.author.name || <Skeleton />}</h4>
            </a>
            <p>{this.props.author.bio || <Skeleton count={3} />}</p>
          </div>
        </div>
      </div>
    );
  }
}
