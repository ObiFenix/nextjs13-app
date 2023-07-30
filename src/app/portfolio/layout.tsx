import React, { ReactNode } from "react";
import styles from "./page.module.css";

export default function Portfolio({ children }: { children: ReactNode }) {
  return (
    <>
      <h1 className={styles.mainTitle}>Portfolio</h1>
      <section className={styles.container}>{children}</section>
    </>
  );
}
