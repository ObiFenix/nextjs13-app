import PostCard from "@src/components/post/PostCard";
import { PostProps } from "@src/types/types";
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
  const postList: PostProps[] = await getData();
  return (
    <>
      {postList.map((post: PostProps) => (
        <PostCard key={post.id} {...post} />
      ))}
    </>
  );
};

export default PostList;
