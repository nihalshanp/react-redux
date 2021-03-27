import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux";

const PostContainer = ({ postData, fetchPosts }) => {
  let clickFlag = true;
  const fetchPostsClick = () => {
    clickFlag = false;
    fetchPosts();
  };
  return (
    <div>
      <button onClick={fetchPostsClick}>Fetch Posts</button>
      {postData.loading ? (
        <h2>Loading</h2>
      ) : postData.error ? (
        <h2>{postData.error}</h2>
      ) : (
        <div>
          <h2>Post list</h2>
          {postData.posts.map((post) => (
            <p> {post.title} </p>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postData: state.posts,
  };
};

const mapDipatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(PostContainer);
