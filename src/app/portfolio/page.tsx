import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Galleria() {
  return (
    <>
      <h1 className={styles.sectionTitle}>Projects Galleria</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="/portfolio/illustrations">
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link className={styles.item} href="/portfolio/websites">
          <span className={styles.title}>Websites</span>
        </Link>
        <Link className={styles.item} href="/portfolio/applications">
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </>
  );
}
