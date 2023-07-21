import { notFound } from "next/navigation";
import React from "react";
import styles from "./page.module.css";

async function getData(id: any) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const BlogPost = async ({ params }: any) => {
  const { title, body } = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
