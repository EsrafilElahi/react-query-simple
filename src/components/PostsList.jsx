import React from "react";
import { useQuery } from "react-query";
import { getPostsData } from "../api/FetchApi";
import PostsListItem from "./PostsListItem";

function PostsList() {
  const { data, status } = useQuery("posts", getPostsData);

  return (
    <div>
      {status === "error" && <span>an error occurred!</span>}
      {status === "loading" && <span>loading...</span>}
      {status === "success" &&
        data?.data?.map((item) => (
          <PostsListItem key={item.id} item={item} />
        ))}
    </div>
  );
}

export default PostsList;
