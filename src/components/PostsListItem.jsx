import React from "react";

function PostsListItem({ item }) {
  return (
    <div className="post-item">
      <span>
        {" "}
        <strong>title :</strong> {item.title}{" "}
      </span>
      <span>
        {" "}
        <strong>passage :</strong> {item.body}{" "}
      </span>
    </div>
  );
}

export default PostsListItem;
