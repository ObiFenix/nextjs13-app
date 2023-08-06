import { notFound } from "next/navigation";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Post } from "@src/types/types";
import Link from "next/link";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store"
  });

  return res.ok ? res.json() : notFound();
}

const BlogPost = async ({ params }: any) => {
  const { title, description, image, source, author } = await getData(
    params.id
  );

  return (
    <div className={styles.container}>
      <div className={styles.contentTop}>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              width={40}
              height={40}
              src={`${author?.avatar}`}
              alt="Author's Avatar Image"
            />
            <span className={styles.username}>{author?.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={`${image}`}
            alt="BlogPost Image"
            fill={true}
          />
        </div>
      </div>
      <div className={styles.contentBottom}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          veritatis, beatae, iste natus atque quaerat aliquam ad neque in
          voluptates voluptate inventore, modi corrupti. Odit rem quam nemo modi
          assumenda velit cum quo exercitationem. Repellendus repellat possimus,
          autem, adipisci, numquam quis qui provident tenetur ipsa perspiciatis
          ullam nihil vero.
          <br />
          <br />
          Velit laudantium, cumque ducimus eum eligendi eaque tempore! Est,
          laudantium nihil cupiditate a quasi ad culpa eveniet explicabo sequi
          amet ducimus similique impedit recusandae magni natus eaque nulla
          nostrum, quos at consectetur eius! Labore, iure, eos recusandae
          voluptatum eius minus, in vero harum itaque maiores magnam debitis
          veritatis nesciunt illum culpa consectetur!
          <br />
          <br />
          Dicta voluptatum, at vero beatae, enim dolorum id alias temporibus
          expedita reprehenderit illum soluta, explicabo nam porro fuga rerum
          suscipit deserunt sapiente. Iusto, eaque? Provident assumenda
          consectetur cumque sunt libero, distinctio, earum ullam voluptate
          corporis quibusdam animi quam laboriosam natus atque perferendis et
          cupiditate placeat velit porro quas reprehenderit.
        </p>
        <br />
        <Link href={source}>
          <code className={styles.source}>
            Click here for more information!
          </code>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
