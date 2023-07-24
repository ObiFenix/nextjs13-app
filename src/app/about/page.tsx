import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@src/components/button/Button";

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="About Cover Image"
          className={styles.image}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h3 className={styles.title}>Who Are We?</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. obcaecati
            aliquam minus, odit distinctio, mollitia laboriosam quaerat fugiat
            eveniet ipsum possimus, quasi saepe dolore voluptatum nemo molestias
            doloremque itaque officia quia quod. Ratione obcaecati labore eum
            odit sapiente totam nisi, veritatis libero Delectus, voluptatem
            doloremque itaque officia quia quod. Ratione obcaecati labore eum.
            <br />
            <br />
            eveniet ipsum possimus, quasi saepe dolore voluptatum nemo molestias
            odit sapiente totam nisi, veritatis libero Delectus, voluptatem
            doloremque itaque officia quia quod. Ratione obcaecati labore eum
            odit sapiente totam nisi, veritatis libero Delectus, voluptatem.
          </p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>What We Do?</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. obcaecati
            aliquam minus, odit distinctio, mollitia laboriosam quaerat fugiat
            eveniet ipsum possimus, quasi saepe dolore voluptatum nemo molestias
            doloremque itaque officia quia quod. Ratione obcaecati labore eum
            odit sapiente totam nisi, veritatis libero repellendus excepturi
            dicta sit ullam?
            <br />
            <br /> - Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy Mobile
          </p>
          <Button label="Contact" url="/contact" />
        </div>
      </div>
    </section>
  );
}
