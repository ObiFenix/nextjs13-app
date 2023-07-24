import imageUrl from "@public/images/social/fb.png";
import { PostProps } from "@src/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

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

const Blog = async () => {
  const postList: PostProps[] = await getData();
  return (
    <>
      {postList.map(({ id, title, body }: PostProps) => (
        <Link className={styles.container} key={id} href={`/blog/${id}`}>
          <div className={styles.imageContainer}>
            <Image
              src={imageUrl}
              alt={"SrcURL"}
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.desc}>{body}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Blog;
