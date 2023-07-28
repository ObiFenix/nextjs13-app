import postImage from "@public/images/indicators-for-a-fan-page.jpg";
import { PostProps } from "@src/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

async function getData(): Promise<any> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data from server");
  }
  return res.json();
}

const Blog = async () => {
  const postList: PostProps[] = await getData();

  return (
    <>
      {postList?.map((post: PostProps) => (
        <Link
          className={styles.container}
          key={post.id}
          href={`/blog/${post.id}`}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={postImage}
              alt={`${post.title} image`}
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Blog;
