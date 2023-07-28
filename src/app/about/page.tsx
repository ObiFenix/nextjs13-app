import Button from "@src/components/button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

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
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. obcaecati
            aliquam minus, odit distinctio, mollitia laboriosam quaerat fugiat
            eveniet ipsum possimus, quasi saepe dolore voluptatum nemo molestias
            odit sapiente totam nisi, veritatis libero Delectus, voluptatem
            doloremque itaque officia quia quod. Ratione obcaecati labore eum.
            <br />
            <br />
            Relevant ipsum possimus, quasi saepe dolore voluptatum nemo
            molestias odit sapiente totam nisi, veritatis libero Delectus,
            voluptatem doloremque itaque officia quia quod. Ratione obcaecati
            labore eum odit sapiente totam nisi, veritatis libero Delectus,
            voluptatem.
            <br />
            <br />
            Under development itaque officia quia quod. Ratione obcaecati labore
            public endorsements odit sapiente totam nisi, veritatis libero
            Delectus, odit sapiente totam nisi, veritatis libero Delectus.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
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
