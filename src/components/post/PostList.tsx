import PostCard from "@src/components/post/PostCard";
import { Post } from "@src/types/types";
import * as React from "react";

async function getData() {
  console.log("Fetching posts");
  const res: Response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data from server");
  }
  return res.json();
}

const PostList: React.FC = async () => {
  const postList: Post[] = await getData();
  return (
    <>
      {postList.map((post: Post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </>
  );
};

export default PostList;
