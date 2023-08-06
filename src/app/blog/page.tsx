import { Post } from "@src/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(): Promise<any> {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store"
  });

  return res.ok ? res.json() : notFound();
}

const Blog = async () => {
  const postList: Post[] = await getData();

  return (
    <>
      <h1 className={styles.pageTitle}>Blogs</h1>
      <section className={styles.pageContainer}>
        {/* Display all posts */}
        {postList?.map(({ _id, title, description, image }: Post) => (
          <Link className={styles.container} key={_id} href={`/blog/${_id}`}>
            <Image
              className={styles.image}
              src={`${image}`}
              alt={`${title} image`}
              width={220}
              height={220}
            />
            <div className={styles.content}>
              <h4 className={styles.title}>{title}</h4>
              <p className={styles.description}>{description}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Blog;
