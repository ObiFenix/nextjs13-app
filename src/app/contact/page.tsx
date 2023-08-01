"use client";

import React from "react";
import "../page.module.css";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@src/components/button/Button";
import ContactImage from "@public/images/contact.png";

export default function Contact() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={ContactImage}
            alt="Contact Icon"
            fill={true}
          />
        </div>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Name" />
          <input className={styles.input} type="text" placeholder="Email" />
          <textarea
            className={styles.textArea}
            rows={8}
            cols={30}
            placeholder="Message"
          />
          <Button url={"#"} label="Send" />
        </form>
      </div>
    </section>
  );
}
