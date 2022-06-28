import PostList from "../components/post-list";

const { Component } = require("react");
const { render } = require("react-dom");

class FetchInfo extends Component {
  baseURL = "https://jsonplaceholder.typicode.com/";
  state = {
    posts: [],
    photos: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");
    const usersResponse = fetch("https://jsonplaceholder.typicode.com/users");

    const [posts, photos, users] = await Promise.all([
      postsResponse,
      photosResponse,
      usersResponse
    ]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    const usersJson = await users.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      const authorIndex = index % 10;
      return {
        ...post,
        cover: photosJson[index].url,
        coverAlt: photosJson[index].title,
        author: usersJson[authorIndex].name
      };
    });

    // console.log(postsJson);
    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="posts container">
        <PostList posts={posts}></PostList>
      </div>
    );
  }
}
export default FetchInfo;
