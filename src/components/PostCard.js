import React from "react";

const PostCard = ({ post }) => {
  return (
    <div>
      <h2>post:</h2>
      <h5>{post.post_text}</h5>
    </div>
  );
};
export default PostCard;
