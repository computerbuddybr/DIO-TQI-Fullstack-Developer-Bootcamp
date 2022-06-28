import { Component } from "react";
import Post from "../post";

class PostList extends Component {
  render() {
    return (
      <section className="postList row">
        {this.props.posts.map((post) => {
          return (
            <div className="col">
              <Post post={post}></Post>
            </div>
          );
        })}
      </section>
    );
  }
}
export default PostList;
