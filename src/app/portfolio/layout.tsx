import React, { ReactNode } from "react";
import styles from "./page.module.css";

export default function Portfolio({ children }: { children: ReactNode }) {
  return (
    <div id="portfolio">
      <h1 className={styles.pageTitle}>Portfolio</h1>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
