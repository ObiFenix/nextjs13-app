import styles from "@src/app/blog/[id]/page.module.css";
import { Post } from "@src/types/types";
import * as React from "react";

const PostCard: React.FC<Post> = ({ title, description }: Post) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
