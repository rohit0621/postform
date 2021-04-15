import React from "react";
import NewPostform from "../components/NewPostForm";
import PostCard from "../components/PostCard";
import { connect } from "react-redux";

const PostsContainer = (props) => {
  return (
    <div>
      <NewPostform />
      <h1>Posts:</h1>
      {props.posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(PostsContainer);
