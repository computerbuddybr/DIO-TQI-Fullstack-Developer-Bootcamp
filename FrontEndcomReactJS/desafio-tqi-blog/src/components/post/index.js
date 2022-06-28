import { Component } from "react";

class Post extends Component {
  render() {
    return (
      <article className="card post" key={this.props.post.id}>
        <img
          src={this.props.post.cover}
          className="card-img-top"
          alt={this.props.post.coverAlt}
        />
        <div className="card-body">
          <h1 className="card-title">{this.props.post.title}</h1>
          <h2 className="card-subtitle mb-2 text-muted">
            {this.props.post.author}
          </h2>
          <div className="card-text postBody">{this.props.post.body}</div>
        </div>
      </article>
    );
  }
}
export default Post;
