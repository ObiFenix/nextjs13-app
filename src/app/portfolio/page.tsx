import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className={styles.container}>
      <h1 className={styles.selectTitle}>Projects Gallery</h1>
      <div className={styles.items}>
        <Link
          className={styles.item}
          href={"/portfolio/illustrations"}
          children={<span className={styles.title}>Illustrations</span>}
        />
        <Link
          className={styles.item}
          href={"/portfolio/websites"}
          children={<span className={styles.title}>Websites</span>}
        />
        <Link
          className={styles.item}
          href={"/portfolio/applications"}
          children={<span className={styles.title}>Applications</span>}
        />
      </div>
    </section>
  );
}
