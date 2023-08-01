import postImage from "@public/images/indicators-for-a-fan-page.jpg";
import { PostProps } from "@src/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(): Promise<any> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store"
  });

  return res.ok ? res.json() : notFound();
}

const Blog = async () => {
  const postList: PostProps[] = await getData();

  return (
    <>
      <h1 className={styles.mainTitle}>Blogs</h1>
      {/* Display all posts */}
      {postList?.map((post: PostProps) => (
        <Link
          className={styles.container}
          key={post.id}
          href={`/blog/${post.id}`}
        >
          <Image
            className={styles.image}
            src={postImage}
            alt={`${post.title} image`}
            width={200}
            height={200}
          />
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.body}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Blog;
